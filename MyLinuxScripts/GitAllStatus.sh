ls | xargs -I{} sh -c "(echo 'Executing script on {} \n' && cd {} && git status && echo '\n-------\n')"