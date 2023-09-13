
import type { appWindow } from '@tauri-apps/api/window'

async function closeWindow(window: typeof appWindow) {
	await window.close()
}

async function minimizeWindow(window: typeof appWindow) {
	await window.minimize()
}

async function maximizeWindow(window: typeof appWindow) {
	await window.maximize()
}

async function toggleWindow(window: typeof appWindow) {
	await window.toggleMaximize()
}

export const getWindowHandler = (window: typeof appWindow) => {
	return {
		close: () => closeWindow(window),
		minimize: () => minimizeWindow(window),
		maximize: () => maximizeWindow(window),
		toggle: () => toggleWindow(window)
	}
}