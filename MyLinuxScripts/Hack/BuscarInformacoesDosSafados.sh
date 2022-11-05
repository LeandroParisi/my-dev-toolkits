initial_text="Procurando informações de: Luan Carlos Faria e Kaique Vinicius Caetano da Silva. As informações serão buscadas nos seguintes sites: Google, Linkdein, Instagram, Site da receita federal, Sites das prefeituras municipais com foco principal na região de São Paulo."

print_lines() {
    grep -o . <<<"$1" | while read a
    do
        # short random delay between keystrokes
        sleep 0.0$[ ( $RANDOM % 50 )  + 1 ]
        # make fake typo every 30th keystroke
        if [[ $((RANDOM%30)) == 1 ]]
        then
            # print random character between a-z
            printf "\\$(printf %o "$((RANDOM%26+97))")"
            # wait a bit and delete it again
            sleep 0.2; echo -ne '\b'; sleep 0.1
        fi
        # output a space, or $a if it is not null
        echo -n "${a:- }"
    done
    echo
}

print_lines "$initial_text"

printf "\n"

sleep 2

mid_text="................ Buscando informações, aguarde .............................."

print_lines "$mid_text"
printf "\n"
print_lines "$mid_text"
printf "\n"
print_lines "$mid_text"
printf "\n"
print_lines "$mid_text"
printf "\n"
print_lines "$mid_text"
printf "\n"
print_lines "$mid_text"


printf "\n"

sleep 1.2

final_text="Informações encontradas: CPF, residência, antecedentes criminais, dados bancários, dados básicos de familiares... Todas essas informações serão salvas no seguinte arquivo: ME_DEVOLVE_MEU_DINHEIRO_VC_N_VAI_SE_ARREPENDER.txt"

print_lines "$final_text"