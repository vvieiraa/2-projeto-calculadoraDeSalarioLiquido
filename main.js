const salario = 10000;
const dependente = 5
    console.log(`Salário Bruto R$ ${salario}`);
    console.log(`Número de dependentes ${dependente}`);

//CÁLCULO DO INSS

if(salario<=1100) {
    var regra1 = (salario * 0.075).toFixed(2);
    console.log(`Desconto de INSS: R$ ${regra1}`);

}else if(salario>1100.01 && salario<=2203.48) {
    var regra2 = ((salario * 0.09) - 16.50).toFixed(2);
    console.log(`Desconto de INSS: R$ ${regra2}`);

}else if(salario>2203.49 && salario<=3305.22) {
    var regra3 = ((salario * 0.12) - 82.60).toFixed(2);
    console.log(`Desconto de INSS: R$ ${regra3}`);

}else if(salario>3305.23 && salario<=6433.57) {
    var regra4 = ((salario * 0.14) - 148.71).toFixed(2);
    console.log(`Desconto de INSS: R$ ${regra4}`);

}else if(salario>6433.57) {
    var regra5 = 751.99
    console.log(`Desconto de INSS: R$ ${regra5}`);

} 

//RESULTADO DO SALÁRIO - INSS

const salarioMenosInss = (salario - (regra1 || regra2 || regra3 || regra4 || regra5)).toFixed(2);
//TESTE console.log(`Salário menos o INSS: R$ ${salarioMenosInss}`);//

const deducaoDependente = (salarioMenosInss - (dependente * 189.59)).toFixed(2);
//TESTE console.log(`Salário menos a dedução INSS e dependente: R$ ${deducaoDependente}`);//

//CÁLCULO DO IRPF

const deduzirIR = deducaoDependente

if(deduzirIR<=1903.08) {
    var ir1 = 0.00
    console.log(`Desconto de IRPF R$ ${ir1}`);

}else if(deduzirIR>=1903.09 && deduzirIR<=2826.65) {
    var ir2 = ((deduzirIR * 0.075) - 142.80).toFixed(2);
    console.log(`Desconto de IRPF R$ ${ir2}`);

}else if(deduzirIR>=2826.66 && deduzirIR<=3751.05) {
    var ir3 = ((deduzirIR * 0.15) - 354.80).toFixed(2);
    console.log(`Desconto de IRPF R$ ${ir3}`);

}else if(deduzirIR>=3751.06 && deduzirIR<=4664.68) {
    var ir4 = ((deduzirIR * 0.225) - 636.13).toFixed(2);
    console.log(`Desconto de IRPF R$ ${ir4}`);

}else if(deduzirIR>4664.68) {
    var ir5 = ((deduzirIR * 0.275) - 869.36).toFixed(2);
    console.log(`Desconto de IRPF R$ ${ir5}`);
}

const salarioliquido = (salarioMenosInss - (ir1 || ir2 || ir3 || ir4 || ir5)).toFixed(2);
console.log(`Salário Líquido: R$ ${salarioliquido}`);