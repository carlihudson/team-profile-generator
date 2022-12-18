// function to generate manager card
const managerCard = () => {
    return `
    <div class="flex justify-center">
            <div class="block mt-6 p-6 rounded-lg shadow-lg bg-purple-200 max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">${manager.name} - Manager</h5>
              <p class="text-gray-700 text-base mb-4">
                <ul>
                    <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <br>
                    <li>Employee ID: ${manager.id}</li>
                        <br>
                    <li>Office Number: ${manager.officeNumber}</li>    
                </ul>
              </p>
            </div>
          </div>`
};

// function to generate engineer card
const engineerCard = () => {
    return `
    <div class="flex justify-center">
            <div class="block mt-6 p-6 rounded-lg shadow-lg bg-purple-200 max-w-sm">
              <h4 class="text-gray-900 text-xl leading-tight font-medium mb-2">${engineer.name}</h4>
              <h5 class="text-gray-900 text-l leading-tight font-medium mb-2"> Engineer </h5>
              <p class="text-gray-700 text-base mb-4">
                <ul>
                    <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <br>
                    <li>Employee ID: ${engineer.id}</li>
                        <br>
                    <li>Github: <a href="www.github.com/${engineer.github}>${engineer.github}</a></li>    
                </ul>
              </p>
            </div>
          </div>`
};

// function to generate intern card
const internCard = () => {
    return `
    <div class="flex justify-center">
            <div class="block mt-6 p-6 rounded-lg shadow-lg bg-purple-200 max-w-sm">
              <h4 class="text-gray-900 text-xl leading-tight font-medium mb-2">${intern.name}</h4>
              <h5 class="text-gray-900 text-l leading-tight font-medium mb-2"> Intern </h5>
              <p class="text-gray-700 text-base mb-4">
                <ul>
                    <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <br>
                    <li>Employee ID: ${intern.id}</li>
                        <br>
                    <li>School: ${intern.school}</li>    
                </ul>
              </p>
            </div>
          </div>`
};

// function to generate HTML page
const generatePage = (data) => {

    // empty array for card data to be pushed into 
    contentArray = []

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if(role === 'Manager') {
            const generateManager = managerCard(employee);
            contentArray.push(generateManager);
        }

        if(role === 'Engineer') {
            const generateEngineer = engineerCard(employee);
            contentArray.push(generateEngineer);
        }
    
        if(role === 'Intern') {
            const generateIntern = internCard(employee);
            contentArray.push(generateIntern);
        }
    }

    // brings all cards together
    const allCards = contentArray.join('')
    const generateTeam = generateStructure(allCards)
        return generateTeam

}

const generateStructure = (employeeCards) => {
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Our Team</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href='./style.css'>
</head>

<body>
    <header>
        <div class="text-center py-2 px-6">
            <h1 class="text-5xl font-bold mt-0 mb-6">Our Team</h1>
        </div>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                <!--Team Cards-->
                ${employeeCards}
            </div>
        </div>
    </main>

    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
        <span class="block text-sm sm:text-center">© 2022. All Rights Reserved.
        </span>
    </footer>

</body>
</html>`

}

module.exports = generateHTML