ls | xargs -I{} sh -c "(echo 'Executing script on {} \n' && cd {} && git add . && git commit -n -m 'updating' && git push && echo '\n-------\n')"


