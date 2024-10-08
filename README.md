# TYPESCRIPT

- `tsc file.ts` - compile typescript file to javascript
  - `tsc file.ts --watch` - compile typescript file to javascript and watch for changes
- `tsc --init` - create a tsconfig.json file
- `tsc` - compile all typescript files in the project
- `tsc --watch` - compile all typescript files in the project and watch for changes
- `tsc -p tsconfig.json` - compile all typescript files in the project using the tsconfig.json file
- `tsc -p tsconfig.json --watch` - compile all typescript files in the project using the tsconfig.json file and watch for changes
- `tsc -v` - check the version of typescript
- `tsc -h` - get help for the typescript compiler

# JAVASCRIPT

- `node file.js` - run javascript file
- `node` - open node repl
- `node -v` - check the version of node
- `node -h` - get help for node

# NODE

- `npm init` - create a package.json file
- `npm install package-name` - install a package
- `npm install package-name@version` - install a specific version of a package
- `npm install package-name --save` - install a package and save it to the package.json file
- `npm install package-name --save-dev` - install a package and save it to the package.json file as a dev dependency
- `npm install` - install all dependencies in the package.json file
- `npm install --production` - install only production dependencies in the package.json file
- `npm install -g package-name` - install a package globally
- `npm uninstall package-name` - uninstall a package
- `npm uninstall package-name --save` - uninstall a package and remove it from the package.json file
- `npm uninstall package-name --save-dev` - uninstall a package and remove it from the package.json file as a dev dependency
- `npm update package-name` - update a package
- `npm update --save` - update all packages in the package.json file
- `npm update --save-dev` - update all dev dependencies in the package.json file
- `npm update -g package-name` - update a global package
- `npm outdated` - check for outdated packages
- `npm list` - list all installed packages
- `npm list --depth=0` - list top-level packages
- `npm list --depth=1` - list top-level and one level deep packages
- `npm list --global` - list all global packages
- `npm list --global --depth=0` - list top-level global packages
- `npm list --global --depth=1` - list top-level and one level deep global packages
- `npm search package-name` - search for a package
- `npm run script-name` - run a script from the package.json file
- `npm start` - run the start script from the package.json file
- `npm test` - run the test script from the package.json file
- `npm stop` - run the stop script from the package.json file
- `npm restart` - run the restart script from the package.json file
- `npm publish` - publish a package
- `npm version patch` - increment the patch version
- `npm version minor` - increment the minor version
- `npm version major` - increment the major version
- `npm version prerelease` - increment the prerelease version
- `npm version 1.2.3` - set the version to 1.2.3
- `npm version 1.2.3 --no-git-tag-version` - set the version to 1.2.3 without creating a git tag
- `npm version 1.2.3 -m "Upgrade to %s for reasons"` - set the version to 1.2.3 with a custom commit message
- `npm version 1.2.3 -m "Upgrade to %s for reasons" --no-git-tag-version` - set the version to 1.2.3 with a custom commit message without creating a git tag
- `npm version 1.2.3 --allow-same-version` - force set the version to 1.2.3

# GIT

- `git init` - initialize a git repository

- `git clone url` - clone a remote repository

- `git add .` - stage all changes

- `git add file` - stage a file

- `git commit -m "message"` - commit changes

- `git status` - check the status of the repository

- `git log` - show the commit history

- `git log --oneline` - show the commit history in one line

- `git log --oneline --graph` - show the commit history in one line with a graph

- `git log --oneline --graph --all` - show the commit history in one line with a graph for all branches

- `git branch` - list all branches

- `git branch branch-name` - create a branch

- `git checkout branch-name` - switch to a branch

- `git checkout -b branch-name` - create and switch to a branch

- `git merge branch-name` - merge a branch into the current branch

- `git pull` - fetch and merge changes from the remote repository

- `git push` - push changes to the remote repository

- `git remote add origin url` - add a remote repository

- `git remote -v` - list all remote repositories

- `git remote show origin` - show information about a remote repository

- `git tag tag-name` - create a tag

- `git tag tag-name commit` - create a tag for a specific commit

- `git tag` - list all tags

- `git show tag-name` - show information about a tag

- `git push origin tag-name` - push a tag to the remote repository

- `git push origin --tags` - push all tags to the remote repository

- `git push origin :tag-name` - delete a tag on the remote repository

- `git tag -d tag-name` - delete a tag locally

- `git reset --hard commit` - reset the current branch to a specific commit

- `git reset --hard origin/master` - reset the current branch to the remote master branch

- `git reflog` - show the reference log

- `git clean -f` - remove untracked files

- `git clean -f -d` - remove untracked files and directories

- `git clean -n` - dry run of the clean command

- `git stash` - stash changes

- `git stash list` - list all stashes

- `git stash apply` - apply the last stash

- `git stash apply stash@{n}` - apply a specific stash

- `git stash drop` - drop the last stash

- `git stash drop stash@{n}` - drop a specific stash

- `git stash pop` - apply and drop the last stash

- `git stash pop stash@{n}` - apply and drop a specific stash

- `git cherry-pick commit` - apply a commit to the current branch

- `git rebase branch-name` - rebase the current branch onto a branch

- `git rebase --continue` - continue a rebase after resolving conflicts

- `git rebase --abort` - abort a rebase

- `git mergetool` - use a merge tool to resolve conflicts

- `git config --global user.name "name"` - set the global username

- `git config --global user.email "email"` - set the global email

- `git config --global core.editor "editor"` - set the global editor

- `git config --global --list` - list all global configurations

- `git config --list` - list all configurations

- `git help` - get help for git

- `git help command` - get help for a git command

- `git --version` - check the version of git

- `git checkout -- file` - discard changes in a file

- `git reset HEAD file` - unstage a file

- `git commit --amend` - amend the last commit

- `git commit --amend -m "message"` - amend the last commit with a new message

- `git commit --amend --no-edit` - amend the last commit without changing the message

- `git push origin --delete branch-name` - delete a remote branch

- `git branch -d branch-name` - delete a local branch

- `git branch -D branch-name` - force delete a local branch

- `git remote set-url origin url` - change the url of a remote repository

- `git remote rename origin new-origin` - rename a remote repository

- `git remote remove origin` - remove a remote repository

- `git fetch origin` - fetch changes from the remote repository

- `git fetch origin branch-name` - fetch a branch from the remote repository

- `git fetch --all` - fetch all changes from all remote repositories

- `git fetch --prune` - fetch changes and delete remote branches that no longer exist

- `git pull origin branch-name` - fetch and merge changes from the remote repository

- `git pull origin branch-name --rebase` - fetch and rebase changes from the remote repository

- `git push origin branch-name` - push changes to the remote repository

- `git push origin branch-name --force` - force push changes to the remote repository

- `git push origin branch-name --tags` - push changes and tags to the remote repository

- `git push origin :branch-name` - delete a branch on the remote repository

- `git push origin --delete branch-name` - delete a branch on the remote repository

- `git push origin --all` - push all branches to the remote repository

- `git push origin --force --all` - force push all branches to the remote repository

- `git push origin --all --tags` - push all branches and tags to the remote repository

- `git push origin --mirror` - push all branches, tags, and remotes to the remote repository

- `git push origin --delete :tag-name` - delete a tag on the remote repository

- `git push origin --delete --tags` - delete all tags on the remote repository

- `git push origin --delete --all` - delete all branches on the remote repository

- `git push origin --delete --mirror` - delete all branches, tags, and remotes on the remote repository

- `git push origin --delete --force --all` - delete all branches on the remote repository

- `git push origin --delete --force --mirror` - delete all branches, tags, and remotes on the remote repository

- `git push origin --delete --force --all --tags` - delete all branches and tags on the remote repository

- `git push origin --delete --force --all --tags --mirror` - delete all branches, tags, and remotes on the remote repository

- `git push origin --delete --force --all --tags --mirror --prune` - delete all branches, tags, and remotes on the remote repository and prune

- `git push origin --delete --force --all --tags --mirror --prune --dry-run` - dry run of the delete command

- `git push origin --delete --force --all --tags --mirror --prune --dry-run --verbose` - dry run of the delete command with verbose output

- `git push origin --delete --force --all --tags --mirror --prune --dry-run --verbose --quiet` - dry run of the delete command with verbose and quiet output

- `git push origin --delete --force --all --tags --mirror --prune --dry-run --verbose --quiet --progress` - dry run of the delete command with verbose, quiet, and progress output

- `git push origin --delete --force --all --tags --mirror --prune --dry-run --verbose --quiet --progress --no-verify` - dry run of the delete command with verbose, quiet, progress, and no-verify output
