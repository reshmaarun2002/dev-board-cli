export function showAbout() {
    console.log(`Node version: ${process.version}`);
    console.log(`Platform: ${process.platform}`);
    console.log(`Current folder: ${process.cwd()}`);
}