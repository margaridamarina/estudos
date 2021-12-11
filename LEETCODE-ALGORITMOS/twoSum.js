// Bom dia vida, bons estudos s2

//Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.

// [4,2,7], 9
// 4 + 4 é nove? N
// 4 + 2 é nove? N
// 4 + 7 é nove? N
// 2 + 2 é nove? N
// 2 + 4 é nove? N
// 2 + 7 é nove? S
// 7 + 2 é nove? S
// 7 + 4 é nove? N
// 7 + 7 é nove? N

console.clear();

var twoSum = function mara (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            const soma = nums[i] + nums[j];
            console.log(
                ` i é igual a ${i}, e j é igual a ${j}\n`,
                `somados = ${nums[i]} + ${nums[j]} = ${soma} `
            );
            console.log('------')
            if (soma == target && i != j) {
                
                return [i, j]
            }
        }
    }
}
const valorDaChamadaDaFuncao = twoSum(
    [2, 5, 5, 11], 10
);
console.log(valorDaChamadaDaFuncao)
