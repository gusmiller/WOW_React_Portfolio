/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Date : 1/10/2024 8:03:28 AM
 * Purpose: When running vite from the command line, Vite will 
 * automatically try to resolve a config file named vite.config.js 
 * inside project root.
 *******************************************************************/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
     plugins: [react()],
     server: {
          port: 3001,
          open: true
     }
})
