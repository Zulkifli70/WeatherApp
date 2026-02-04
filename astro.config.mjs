import netlify from "@astrojs/netlify"; // Import the adapter

export default defineConfig({
  output: "server", // Enable server-side rendering
  adapter: netlify(), // Use Netlify adapter
});
