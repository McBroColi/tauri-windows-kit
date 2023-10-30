import { appWindow } from "@tauri-apps/api/window";
import { writable } from "svelte/store";


export const appIsMaximizedStore = writable<boolean>(false)


export function createWindowEventListener() {
    const resizeFunction = async () => {
        appIsMaximizedStore.set(await appWindow.isMaximized());
    };

    window.addEventListener('resize', resizeFunction);

    return function destroyWindowEventListener() {
        window.removeEventListener('resize', resizeFunction);
    };
}