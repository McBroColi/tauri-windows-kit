# tauri-sveltekit-kit

This is a personal template for building Tauri applications in a Windows-style app. It is not intended for public usage as it is not well-polished and is tailored to my specific needs. However, there's nothing here to stop you from using it as a starting point for your own projects.

## Overview

The structure of the project is relatively loose and there are right now several empty components. There's a few scripts that assist in managing stores.
However, here's some of what's pre-configured and included:
- Tailwind & SCSS via `sass`
- `iconify-icon` for SvelteKit
- A variety of dependencies common to my own projects: `three.js`, `openai`, `d3-interpolate`, `dexie.js`, and several others.

## Tauri Configuration

The Tauri configuration is set up to build a standalone application with a custom window design, including window controls and an application icon. The Rust backend is configured with additional dependencies for window shadows and vibrancy, enhancing the visual appearance of the application. See [window-vibrancy](https://crates.io/crates/window-vibrancy) and [window-shadows](https://crates.io/crates/window-shadows).

## Purpose

This project exists to provide a starting point for building Tauri applications with a specific set of features and design elements. It is a personal template that I use for my own projects, and it may not be suitable for all use cases. However, it can serve as a useful reference or starting point for others who are interested in building similar applications.