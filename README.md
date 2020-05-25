# git commands:
- create you own branch

- git checkout -b tusharBranch
# switch to your branch from master to tusharBranch

- git checkout tusharBranch

# or: use force to checkout 
- git checkout -f tusharBranch

# git pull , eg: if you are behind

- git pull
# If you want to pull a branch and you edited your branch

stash the your branch.

- git stash
# then pull

- pull master
- if you want to rebase your branch with master

- git rebase master
# do not merge with master without conversation

# eg: if you want to merge your local branch with - - - - - tusharBranch
# git merge tusharBranch
# Stop giving username and password for every commit:
# git config --global user.name "example@gmail.com"
# git config --global user.password "password"
