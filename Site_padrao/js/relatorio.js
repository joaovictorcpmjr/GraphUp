//comparativo mes
const ctC = document.getElementById('comparativo').getContext('2d');
const comparativo = new Chart(ctC, {
    type: 'line', 
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Comparativo de Vendas Mensais',
            data: [1000, 2000, 9000, 1000, 10000,1000, 2000, 9000, 1000, 1000,0, 0 ],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(54, 162, 235, 1)',
                'rgb(255, 0, 0)',
                'rgb(30, 255, 0)',
                'rgb(85, 0, 255)',
                'rgb(255, 166, 0)',
                'rgb(255, 0, 242)',
                'rgb(255, 255, 255)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//funcionario
const ctF = document.getElementById('funcionarios').getContext('2d');
const funcionario = new Chart(ctF, {
    type: 'bar', 
    data: {
        labels: ['Joao', 'Lucas', 'Guilherme', 'Felipe',],
        datasets: [{
            label: 'Vendas Funcionarios',
            data: [1000, 400, 500.90, 800.99, ],
            backgroundColor: [
                'rgb(0, 255, 0, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgb(0, 255, 0)',
                'rgba(255, 99, 132, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//categoria 
const ctCa = document.getElementById('categoria').getContext('2d');
const categoria = new Chart(ctCa, {
    type: 'bar', 
    data: {
        labels: ['Perfume', 'Roupa', 'Tenis', 'Joia',],
        datasets: [{
            label: 'Categoria mais vendida',
            data: [1000, 400, 500.90, 800.99, ],
            backgroundColor: [
                'rgb(55, 0, 255, 0.2)',
                'rgb(255, 0, 55, 0.2)',
                'rgb(25, 141, 112, 0.2)',
                'rgb(0, 247, 255, 0.2)',
            ],
            borderColor: [
                'rgb(55, 0, 255)',
                'rgb(255, 0, 55)',
                'rgb(25, 141, 112)',
                'rgb(0, 247, 255)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});