
import { interpolateHsl } from "d3-interpolate";
import { tweened } from "svelte/motion";
import type { Readable, TweenedOptions } from "svelte/motion";



type Config = TweenedOptions<string>

function validateColors(colors: string[]): void {
    if (colors.length < 2) {
        throw new Error("Color array must have at least 2 colors");
    }
}

function getNextIndex(currentIndex: number, colors: string[]): number {
    return (currentIndex + 1) % colors.length;
}

function getPrevIndex(currentIndex: number, colors: string[]): number {
    return (currentIndex - 1 + colors.length) % colors.length;
}

function validateIndex(index: number, colors: string[]): void {
    if (index < 0 || index >= colors.length) {
        throw new Error("Index out of bounds");
    }
}

const baseCfg = { interpolate: interpolateHsl }

function validateConfig(config?: Config) {
    if (!config) {
        return baseCfg;
    } else if (!('interpolate' in config)) {
        return { ...config, ...baseCfg };
    } else {
        return config;
    }
}



export interface ColorStopsStoreTwoColors extends Readable<string> {
    toggle: (config?: Config) => Promise<void>,
    on: (config?: Config) => Promise<void>,
    off: (config?: Config) => Promise<void>
}

export interface ColorStopsStoreMultiColors extends Readable<string> {
    next: (config?: Config) => Promise<void>,
    prev: (config?: Config) => Promise<void>,
    set: (index: number, config?: Config) => Promise<void>
}




export function makeBiColorStore(colors: string[], config?: Config): ColorStopsStoreTwoColors {
    validateColors(colors);
	
    let currentIndex = 0;
    const { subscribe, set } = tweened<string>(colors[currentIndex], validateConfig(config));

    const setIndex = (index: number, config?: Config) => {
        currentIndex = index;
        return set(colors[currentIndex], validateConfig(config));
    };

    return {
        subscribe,
        toggle: (config?: Config) => setIndex(currentIndex === 1 ? 0 : 1, config),
        on: (config?: Config) => setIndex(1, config),
        off: (config?: Config) => setIndex(0, config)
    } as ColorStopsStoreTwoColors
}

export function makeMultiColorStore(colors: string[], config?: Config): ColorStopsStoreMultiColors {
    validateColors(colors);
	
    let currentIndex = 0;
    const { subscribe, set } = tweened<string>(colors[currentIndex], validateConfig(config));

    const setIndex = (index: number, config?: Config) => {
        currentIndex = index;
        return set(colors[currentIndex], validateConfig(config));
    };

    return {
        subscribe,
        next: (config?: Config) => setIndex(getNextIndex(currentIndex, colors), config),
        prev: (config?: Config) => setIndex(getPrevIndex(currentIndex, colors), config),
        set: (index: number, config?: Config) => {
            validateIndex(index, colors);
            return setIndex(index, validateConfig(config));
        }
    } as ColorStopsStoreMultiColors
}
