function solve(name, population, treasury) {
    return {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: () => {
            treasury += population * taxRate;
        },
        applyGrowth: (percentage) => {
            return population += population * (percentage / 100);
        },
        applyRecession: (percentage) => {
            return population -= population * (percentage / 100);
        }
    }
}
console.log(solve('Tortuga', 7000, 15000));