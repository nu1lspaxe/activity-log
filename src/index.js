const { fetchAndFilterEvents } = require('./utils/github');
const { updateReadme } = require('./utils/file');
const { username, token, eventLimit, targetRepos, ignoreEvents, readmePath, commitMessage } = require('./config');
const core = require('@actions/core')

async function main() {
    try {
        const activity = await fetchAndFilterEvents({ username, token, eventLimit, targetRepos, ignoreEvents });
        await updateReadme(activity, readmePath);
    } catch (error) {
        core.setFailed(`❌ Error in the update process: ${error.message}`);
        console.error(error)
        process.exit(1);
    }
}

main();
