<h1 align="center" id="title">Activity Log</h1>

![activity log](https://socialify.git.ci/TheDanniCraft/activity-log/image?forks=1&issues=1&language=1&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F66677362&name=1&owner=1&pattern=Solid&pulls=1&stargazers=1&theme=Auto)

<p align="center">
    <img src="https://img.shields.io/badge/Made%20with%20Love%E2%9D%A4%EF%B8%8F-black?style=for-the-badge" alt="made with love">
    <img src="https://img.shields.io/badge/Node.JS-node?style=for-the-badge&amp;logo=nodedotjs&amp;logoColor=white&amp;color=%235FA04E" alt="typescript">
</p>

A GitHub Action that automatically updates your README file with the latest activity from your GitHub account. Customize the displayed events, set a limit on the number of events, and ignore specific event types. Ideal for keeping your personal README file current with recent contributions and changes.

## 🛠️Features

- Customizable Event Limits
- Event Filtering
- Flexibility with Inputs

## ✍️ Example

<!--START_SECTION:activity-->
1. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/1478c8d30dabc9d13f9e9dc47b327690f6f9d4d4)
2. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/74dae166f10c9fde386240e7579894a351eda083)
3. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/fa362e333d7d028764324447414cdb73c76feedd)
4. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/d98223179f456e31a1b2de7cdf0c44677e0808bb)
5. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/53c953249707de1279784dbfedaa796ee0c8db6f)
6. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/636d8f34e010f56c4a3e4fd7f6dd21c7ee5d686b)
7. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/26e58c9c6dd1da0d5dfd1c04ee8ddd454e33a68e)
8. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/786acfabd03b3730bc09253544d9c336046bcb87)
9. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/bf69d47620e9d662c2f211aa009b64261a6c8c14)
10. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/0835dee4a4b1a09188bf399d55553bdab6731d41)
11. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/8e5cd03c6524ce463a3808a499a9998e9d1516d2)
12. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/bff27cb8ee9477e223148a1445843f0865395acb)
13. ➕ Created a new tag [`v1`](https://github.com/nu1lspaxe/activity-log/releases/tag/v1) in [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log)
14. 🚀 Published release [`v1`](https://github.com/nu1lspaxe/activity-log/releases/tag/v1) in [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log)
15. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/43d5d280023f6bb308ed06c93a1d8fdd08324200)
16. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/0725288fd23d61a3f4ba3b484f8cf5c186121305)
17. 📝 Committed to [nu1lspaxe/activity-log](https://github.com/nu1lspaxe/activity-log/commit/7a0b58f841b380caf2587b48e6afa3147360feaf)
<!--END_SECTION:activity-->

## 📖Usage

### 1. Add Sections to `README.md`

Include the following placeholders in your `README.md` where you want the activity log to appear:

```markdown
<!--START_SECTION:activity-->
<!--END_SECTION:activity-->
```

For a reference example, you can view this [sample `README.md`](https://github.com/TheDanniCraft/activity-log/blob/master/README.md?plain=1#L20-L31).

### 2. Create a Personal Access Token

<details open>
  <summary><strong>Quick Setup</strong> <i>(Recommended)</i></summary>

  1. To create a personal access token with the necessary permissions, click this [link to create a new token](https://github.com/settings/tokens/new?description=Github%20Activity%20Log%20(TheDanniCraft/activity-log)&scopes=repo). This link pre-fills the token description and scopes for your convenience.
  2. On the token creation page, review the pre-filled data and set the expiration date to "Never".
  3. Click "Generate token" and copy the token (be sure to save it as you won’t be able to see it again).

</details>

<details>
  <summary><strong>Manual Setup</strong></summary>

  1. Go to your GitHub [Personal Access Tokens settings](https://github.com/settings/tokens).
  2. Click on "Generate new token".
  3. Provide a descriptive name for the token, such as `Github Activity Log (TheDanniCraft/activity-log)`.
  4. Select the `repo` scope (recommended if you want private repo activity to show up).
  5. Set the expiration date to "Never".
  6. Click "Generate token" and copy the token (be sure to save it as you won’t be able to see it again).

</details>

### 3. Add the Token as a Repository Secret

1. Navigate to your GitHub repository.
2. Go to "Settings" > "Secrets and variables" > "Actions".
3. Click "New repository secret".
4. Name the secret (e.g., `TOKEN`).
5. Paste the personal access token into the value field.
6. Click "Add secret".

### 4. Create the Workflow File

Create a new file in your repository under `.github/workflows/`, for example, `activity-log.yml`. Add the following content to this file:

```yml
# .github/workflows/update-activity.yml:

name: Update GitHub Activity

on:
  schedule:
    - cron: "*/30 * * * *" # Runs every 30 minutes
  workflow_dispatch: # Allows manual triggering

jobs:
  update-activity:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Update GitHub Activity
        uses: TheDanniCraft/activity-log@v1
        with:
          GITHUB_USERNAME: "thedannicraft"
          GITHUB_TOKEN: ${{ secrets.TOKEN }} # Ensure this matches the secret name in repository settings
```

Take a look at all possible [Inputs](#inputs) for customization

The above job runs every half an hour, you can change it as you wish based on the [cron syntax](https://crontab.guru).

Please note that only those public events that belong to the following list show up:

- `CreateEvent`
- `PushEvent`
- `IssuesEvent`
  - `opened`
  - `edited`
  - `closed`
  - `reopened`
  - `assigned`
  - `unassigned`
  - `labeled`
  - `unlabeled`
- `PullRequestEvent`
  - `opened`
  - `edited`
  - `closed`
  - `merged`
  - `reopened`
  - `assigned`
  - `unassigned`
  - `review_requested`
  - `review_request_removed`
  - `labeled`
  - `unlabeled`
  - `synchronize`
- `ReleaseEvent`
- `ForkEvent`
- `CommitCommentEvent`
- `IssueCommentEvent`
- `PullRequestReviewEvent`
- `PullRequestReviewCommentEvent`
- `RepositoryEvent`
- `WatchEvent`
- `StarEvent`
- `PublicEvent`
- `GollumEvent`

You can find an example [here](https://github.com/TheDanniCraft/activity-log/blob/master/.github/workflows/update-activity.yml).

### Inputs

| **Input**         | **Description**                                                                                                                                                                 | **Required**     | **Default**                             | **Possible Options**                                                        |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-----------------------------------------|-----------------------------------------------------------------------------|
| `GITHUB_USERNAME` | Your GitHub username.                                                                                                                                                           | ✅               | `-`                                     | A valid GitHub username                                                    |
| `GITHUB_TOKEN`    | Your GitHub token.                                                                                                                                                              | ✅               | `-`                                     | A valid GitHub access token (must belong to the specified GitHub username) |
| `EVENT_LIMIT`     | The maximum number of events to display.                                                                                                                                        | ❌               | `10`                                    | Any positive integer                                                       |
| `OUTPUT_STYLE`    | Specifies the format in which your output should be rendered. <br> <ins>Must be one of:</ins> <br> - `MARKDOWN`: Output in Markdown format <br> - `HTML`: Output in HTML format | ❌               | `MARKDOWN`                              | `MARKDOWN` or `HTML`                                                       |
| `IGNORE_EVENTS`   | The events to ignore, specified as a JSON array.                                                                                                                                | ❌               | `[]`                                    | JSON array of event types (e.g., `["PushEvent", "PullRequestEvent"]`)               |
| `README_PATH`     | The path to your README file.                                                                                                                                                   | ❌               | `README.md`                             | Any valid file path                                                        |
| `COMMIT_MESSAGE`  | Your commit message.                                                                                                                                                            | ❌               | `-`                                     | Any valid commit message                                                   |

## 📜License

[MIT](https://choosealicense.com/licenses/mit/)

## ✍️Authors

- [@thedannicraft](https://www.github.com/thedannicraft)
