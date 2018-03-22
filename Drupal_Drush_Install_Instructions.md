Process for setting up a drupal site: 

1. Download Drush (dev-master) - https://packagist.org/packages/drush/drush (more info here: https://github.com/drush-ops/drush)
2. Install drush
3. Open drush command line interface (or set PATH to the location of drush install so it can be used from a normal CLI cmd/bash editor of choice). 
4. Navigate to install directory (var/www/ or wamp/www/). Command "drush dl drupal"
		OPTIONAL MySql commands - can skip to Step 6 to create db with drush
5. Set up drupal database (either locally hosted or online, repl db_name.* with *.* for all). 
	MySql> "CREATE DATABASE db_name;" with, for example, db_name = "cms_drupal" 
	MySql> "USE db_name;"
	MySql> "CREATE USER 'user_name'@'domain' IDENTIFIED BY 'password';
(eg: create user 'drupalEdit'@'localhost' identified by 'greatpassword';)
	MySql> "GRANT ALL PRIVILEGES ON db_name.* TO 'user_name'@'domain' IDENTIFIED BY 'password';
6. Install drupal with drush command: "drush site-install standard --db-url=mysql://[MySqlUser]:[MySqlPassword]@localhost/[MySqlDatabase]" which defaults username to admin and generates a random passwd which will be displayed after successful install. Note: replace [MySqlUser] with DB user_name from above (remove brackets []).
EX: ""drush si standard --db-url=mysql://not_root:great_password@localhost/cms_drupal""
RESULT: Installation complete.  User name: admin   User password: 47E7fMayfV
7. "drush dl module_filter views pathauto features jquery_update libraries nivo_slider" DL modules and accept dependencies
8. "drush en module_filter views views_ui pathauto features jquery_update libraries nivo_slider" Install/enable modules
9. "drush dl zen" "drush en zen" Get and set themes
(https://www.drupal.org/project/united_zymphonies_theme) Good base theme. 
	"drush status" 
	"drush vget" 
	"drush vget theme_default" 
	"drush vset theme_default united_zymphonies" 
	"drush pm-list" "drush cron" "drush cc" "drush cc all" (clear cache) 
	"drush archive-backup" First clean install backup. 
	"drush archive-restore [backup_path]"
	"drush up" to update all modules, themes, and core code. 
10. "git config --global user.name [name]" "git config --global user.email [email_address]" 
11. Navigate to site directory (var/www/drupal...[version_number]/) 
12. "git init" the directory, "git add ." to add all files and folders recursively, "git commit -m "Initial commit of Drupal website files"" 
	"git config --global mergetool.keepBackup false" don't create extra file when merging
	"git diff" 
	"git status" 
	"git checkout" to overwrite local files with previous commit
	"git log" "git revert" using hash from git log result
	"git branch [branch_name]" to create a copy of the repo to test changes/additions
	"git branch" lists all branches, * indicates current branch checked out
	"git checkout [branch_name]" Switch to working on the forked branch's files
	"git merge [branch_name]" Merge b_name into currently checked out branch
	"git mergetool" To resolve conflicts between files changed in diff branches
13. Create sshkey. Linux cli cmd should be "ssh-keygen" if not search "Generate SSH key [OS]" which should put a public key at:  ~/.ssh/id_rsa.pub    Open .pub and copy contents of file
14. In GitHub -> Account Settings -> SSH Keys -> Add SSH Key, give title, paste from .pub above
This should all probably be done in BitBucket so the Repo can be private since it contains passwords and other sensitive information in the install directories. Same steps, tho. Or add sensitive files to .gitignore file.
15. Create public repository in GitHub. Click on SSH button -> Push an existing repository cli
16. Toggle switch should be on SSH. Copy to clipboard from GitHub. Back to gitbash...
17. "git remote add github git@github.com:[user_name]/[git_repo_name].git"
18.  Sync local files with GitHub files "git pull github master" FROM github TO master
19. Re-add now-synced files to next commit "git add ."
20. Re-commit now-synced files "git commit -m "Commit after syncing with GitHub files""
21. "git push -u github master" (FROM master TO github) 
	Refresh GitHub and it should now be online	
	"git remote" Lists git remotes for current project, -v for a Verbose list
	"git remote rm [remote_name]" Removes a Git remote from current project
	(Deleting the remote does not delete the repo, just the link to sync)
	(github is the remote name, usually referred to as "origin")
