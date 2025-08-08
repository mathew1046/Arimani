document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const imagePreviewWrapper = document.querySelector('.image-preview-wrapper');
    const showNamesBtn = document.getElementById('showNamesBtn');
    const resultsSection = document.getElementById('resultsSection');
    const grainCountSpan = document.getElementById('grainCount');
    const namesDisplay = document.getElementById('namesDisplay');
    const nameSearchInput = document.getElementById('nameSearchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResultDiv = document.getElementById('searchResult');

    // Sample names dataset if names.js isn't loaded
    const fullNamesDataset = window.fullNamesDataset || [
        'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'Elijah', 'Isabella', 'James',
        'Charlotte', 'Benjamin', 'Amelia', 'Lucas', 'Mia', 'Mason', 'Harper', 'Ethan', 'Evelyn', 'Logan',
        "Aarav", "Aisha", "Ananya", "Arjun", "Bhavana", "Dhruv", "Esha", "Gaurav", "Harsha", "Isha",
"Kunal", "Lata", "Meera", "Nikhil", "Pooja", "Rajesh", "Saanvi", "Siddharth", "Tanya", "Uday",
"Aditya", "Priya", "Rohit", "Sneha", "Vikram", "Divya", "Manish", "Neha", "Suresh", "Kavya",
"Amit", "Jyoti", "Sunil", "Rekha", "Vishal", "Swati", "Anil", "Ritu", "Ashok", "Shreya",
"Harish", "Komal", "Sachin", "Tanvi", "Deepak", "Anusha", "Suraj", "Madhuri", "Prakash", "Namrata",
"Ravi", "Kiran", "Varun", "Alka", "Ajay", "Rashmi", "Rajiv", "Pallavi", "Naveen", "Bhavya",
"Chandan", "Poonam", "Sanjay", "Anita", "Hemant", "Lavanya", "Gopal", "Charu", "Yogesh", "Seema",
"Ramesh", "Archana", "Lokesh", "Geeta", "Jatin", "Monika", "Tushar", "Kirti", "Parth", "Mansi",
"Mahesh", "Sarita", "Anup", "Neelam", "Dev", "Vaishali", "Sameer", "Smita", "Balaji", "Padmini",
"Kishore", "Pushpa", "Shankar", "Anju", "Krishna", "Rina", "Narendra", "Bindu", "Vinod", "Kamini",
"Harendra", "Aparna", "Shiv", "Bina", "Karthik", "Hemlata", "Mohan", "Snehal", "Sandeep", "Kusum",
"Rohini", "Rajendra", "Vidya", "Rakesh", "Rupali", "Pranav", "Kanika", "Vikas", "Meghna", "Satish",
"Madhu", "Tejas", "Shalini", "Amar", "Priyanka", "Shyam", "Sunita", "Omkar", "Vandana", "Sagar",
"Arpita", "Deepti", "Anurag", "Suchitra", "Girish", "Minakshi", "Puneet", "Aarti", "Rajat", "Suman",
"Sharad", "Ankita", "Yash", "Ayesha", "Bharat", "Malini", "Nitin", "Chitra", "Saurabh", "Sonali",
"Deepesh", "Nandita", "Harpreet", "Shobha", "Akash", "Sudha", "Manoj", "Radha", "Ketan", "Indira",
"Aryan", "Kalpana", "Devendra", "Sumitra", "Aniket", "Sushma", "Shashank", "Uma", "Vineet", "Rajni",
"Pradeep", "Reena", "Hitesh", "Tara", "Rituraj", "Chandni", "Vijay", "Anamika", "Navin", "Mamta",
"Tarun", "Rachna", "Shivendra", "Neetu", "Hemendra", "Leela", "Abhay", "Pavitra", "Jagat", "Saloni",
"Avinash", "Tanisha", "Lalit", "Preeti", "Bhaskar", "Maya", "Ashwin", "Damini", "Raghav", "Karuna",
"Parveen", "Gita", "Rupesh", "Anushka", "Arvind", "Manju", "Santosh", "Kajal", "Nirmal", "Padmini",
"Sachdev", "Amisha", "Prakash", "Roshan", "Zoya", "Sameera", "Akhilesh", "Harini", "Dinesh", "Roma",
"Rohitash", "Shazia", "Brijesh", "Rupinder", "Meenakshi", "Veena", "Vikrant", "Padma", "Sudhir", "Bhavna",
"Mahendra", "Tanushree", "Shivani", "Irfan", "Afsana", "Nasir", "Jaspreet", "Meera", "Naseem", "Kavita",
"Farhan", "Niharika", "Riaz", "Sultana", "Arman", "Zainab", "Sameen", "Tasneem", "Imran", "Afreen",
"Rumana", "Tabassum", "Salim", "Nausheen", "Sadiq", "Firoz", "Yasir", "Shabnam", "Parvez", "Nilofer",
"Zubair", "Shirin", "Asif", "Lubna", "Javed", "Parveen", "Shahid", "Ruksana", "Shahbaz", "Sabeena",
"Afzal", "Nighat", "Shahrukh", "Kulsum", "Adil", "Shama", "Faiz", "Ghazala", "Tariq", "Shehnaz",
"Waqar", "Shagufta", "Shakeel", "Mahjabeen", "Amin", "Aamna", "Rehan", "Bushra", "Azhar", "Farzana",
"Mohd", "Zarina", "Iqbal", "Nargis", "Sohail", "Dilshad", "Khalid", "Shams", "Sabina", "Samina",
"Nazir", "Hina", "Sakina", "Noor", "Hamid", "Kareem", "Shafqat", "Anwar", "Naseer", "Jameela",
"Rauf", "Yasmin", "Anees", "Rubina", "Munir", "Shereen", "Tabrez", "Aneeza", "Arshad", "Razia",
"Bilal", "Tuba", "Faisal", "Samira", "Obaid", "Shazia", "Idrees", "Hafsa", "Azeem", "Tasnim",
"Rashid", "Qamar", "Rameez", "Sadia", "Sarfaraz", "Hameeda", "Imtiyaz", "Tehmina", "Masood", "Aqsa",
"Aaditya", "Advait", "Alok", "Amrit", "Animesh", "Anirudh", "Ansh", "Arnav", "Ashutosh", "Atul",
"Bhargav", "Bhuvan", "Chirag", "Darshan", "Debashish", "Devansh", "Dhanraj", "Dipesh", "Eshan", "Gagan",
"Girish", "Gokul", "Govind", "Hardik", "Himanshu", "Hriday", "Indrajit", "Ishwar", "Jaideep", "Jaishankar",
"Janardhan", "Jayant", "Jeet", "Jitendra", "Kailash", "Kalyan", "Kamlesh", "Kanhaiya", "Kapil", "Kartik",
"Kiranraj", "Kishan", "Lakhan", "Lalith", "Loknath", "Madan", "Manav", "Manohar", "Mayank", "Milind",
"Mithun", "Mukul", "Murlidhar", "Nandan", "Narain", "Narayan", "Navdeep", "Navjot", "Naveenraj", "Nikhilesh",
"Nilesh", "Omprakash", "Padmanabhan", "Parag", "Pankaj", "Parikshit", "Piyush", "Pradyumn", "Prakashan", "Pranesh",
"Prashant", "Pratap", "Prem", "Pushkar", "Raghunath", "Raghuram", "Rajatdeep", "Rajkumar", "Ramakant", "Raman",
"Rameshan", "Randeep", "Ranjan", "Ranjith", "Ratan", "Ravindra", "Ravish", "Sachinraj", "Sahil", "Saketh",
"Sambhav", "Samrat", "Sandeepan", "Sanjivan", "Sankalp", "Sankaran", "Santan", "Sarvesh", "Satendra", "Satyajit",
"Satyam", "Saurav", "Shailendra", "Shanmugam", "Sharath", "Shekar", "Shivram", "Shravan", "Shubham", "Shyamal",
"Siddhanth", "Somnath", "Sridhar", "Subash", "Sudarshan", "Suhas", "Sumeet", "Sundar", "Surendra", "Suryakant",
"Swapnil", "Tapan", "Tilak", "Trilok", "Umesh", "Upendra", "Vaibhav", "Vasudev", "Veer", "Veerendra",
"Venkatesh", "Vibhor", "Vidur", "Vijendra", "Vijoy", "Vinay", "Vinayan", "Vinesh", "Vishnu", "Vishwanath",
"Vivekanand", "Yatindra", "Yogendra", "Zubin", "Abhilash", "Abhinav", "Advaith", "Agastya", "Ajinkya", "Ajmal",
"Akshay", "Alankar", "Amalesh", "Amitesh", "Amol", "Anant", "Aniketraj", "Anshuman", "Aravind", "Arjunraj",
"Arpan", "Arvindraj", "Ashim", "Ashwath", "Avijit", "Avnish", "Basant", "Bhavesh", "Bishnu", "Brijmohan",
"Chaitanya", "Chanchal", "Chinnaswamy", "Damodar", "Dattatreya", "Dayanand", "Deependra", "Devesh", "Dhiraj", "Digvijay",
"Dilraj", "Dineshwar", "Durgesh", "Eklavya", "Gajendra", "Gokulan", "Gopalakrishnan", "Gunjan", "Hansraj", "Harikesh",
"Harminder", "Harshad", "Hemchandra", "Himendra", "Inderjit", "Ishant", "Jagmohan", "Jasjit", "Jayesh", "Jeevan",
"Joginder", "Joshi", "Kailasan", "Kalidas", "Kamalan", "Kanwal", "Kantilal", "Karanveer", "Kedar", "Kesavan",
"Khagesh", "Krishnaraj", "Kuldeep", "Kumaran", "Lakshman", "Lalitraj", "Lokanath", "Madhav", "Mahadevan", "Maheshwar",
"Maitreya", "Maninder", "Manjunath", "Mannath", "Manoharan", "Manoranjan", "Maruthi", "Mathivanan", "Mihir", "Mithilesh",
"Mohanraj", "Mohnish", "Mukund", "Murugan", "Nagendra", "Naresh", "Naveenkumar", "Nayak", "Nazar", "Niladri",
"Niranjan", "Nirmalya", "Nishant", "Omkesh", "Pallab", "Pandurang", "Partha", "Parthiban", "Pashupati", "Patanjali",
"Pavankumar", "Piyushraj", "Prabhakar", "Prabhath", "Prabhu", "Pradip", "Praful", "Prafull", "Pranab", "Pranavraj",
"Prashantraj", "Pratyush", "Premraj", "Pritam", "Purnendu", "Purushottam", "Raghunandan", "Rahul", "Rajagopal", "Rajamani",
"Rajan", "Rajdeep", "Rajendran", "Rajeshwar", "Rajivraj", "Rajkiran", "Rajneesh", "Ramakrishnan", "Ramanujam", "Rameshkumar",
"Rana", "Ranjithkumar", "Rasik", "Ratanlal", "Ravikiran", "Ravikumar", "Ravindraraj", "Reghu", "Rekesh", "Rishabh",
"Ritesh", "Roshanraj", "Rudra", "Rudranath", "Sadanand", "Sagarraj", "Sahilraj", "Sai", "Sajeev", "Sakthivel",
"Samir", "Sanatan", "Sandeepraj", "Sanjayraj", "Sanket", "Santanu", "Sanyam", "Sarabjit", "Sardul", "Sarvanan",
"Satpal", "Satyavrat", "Saurabhraj", "Shailesh", "Shantanu", "Sharan", "Shashiraj", "Shashwat", "Sheikh", "Shivkumar",
"Shyamraj", "Siddhesh", "Sidharth", "Sohan", "Sourav", "Subhajit", "Subodh", "Sudam", "Sudeep", "Sudhakar",
"Sudhirraj", "Suhail", "Sujan", "Sujit", "Sukhdev", "Sulochana", "Sumant", "Sundarraj", "Surajraj", "Surendran",
"Sureshkumar", "Suryanarayan", "Susheel", "Swadesh", "Swapan", "Tanuj", "Thakur", "Tilaknath", "Tirthankar", "Udayraj",
"Ujwal", "Umakant", "Upendranath", "Utkarsh", "Vallabh", "Vanraj", "Varadarajan", "Vasant", "Vasudevan", "Vedant",
"Veeraj", "Venkataraman", "Vetrivel", "Vibhas", "Vidwan", "Vighnesh", "Vikramaditya", "Vimal", "Vinayak", "Vinodh",
"Viplav", "Viraj", "Virendra", "Vishesh", "Vishwesh", "Vithal", "Vivek", "Yadav", "Yogeshwar", "Yudhishthir",
"Devadathan", "Mathew", "Noel", "Jasim","Aaron", "Abigail", "Adam", "Adrian", "Aiden", "Albert", "Alexa", "Alexander", "Alexis", "Alice",
"Alicia", "Allan", "Allison", "Alyssa", "Amanda", "Amber", "Amelia", "Amy", "Andre", "Andrea",
"Andrew", "Angela", "Ann", "Anna", "Anne", "Anthony", "Antonio", "April", "Ariana", "Arianna",
"Arthur", "Ashley", "Aubrey", "Audrey", "Austin", "Autumn", "Ava", "Avery", "Barbara", "Beatrice",
"Benjamin", "Bernard", "Beth", "Bethany", "Betty", "Beverly", "Blake", "Bob", "Bobby", "Bonnie",
"Brad", "Bradley", "Brandon", "Brenda", "Brent", "Brett", "Brian", "Brianna", "Brittany", "Brody",
"Brooke", "Bruce", "Bryan", "Bryce", "Caleb", "Calvin", "Cameron", "Candace", "Carl", "Carla",
"Carlos", "Carmen", "Carol", "Caroline", "Carolyn", "Carrie", "Casey", "Cassandra", "Catherine", "Cathy",
"Chad", "Charles", "Charlotte", "Chase", "Chelsea", "Cheryl", "Chris", "Christian", "Christina", "Christine",
"Christopher", "Cindy", "Claire", "Clara", "Clarence", "Claudia", "Clayton", "Clifford", "Clint", "Clinton",
"Cody", "Colby", "Cole", "Colin", "Colleen", "Connie", "Connor", "Conrad", "Corey", "Courtney",
"Craig", "Crystal", "Curtis", "Cynthia", "Daisy", "Dakota", "Dale", "Dallas", "Dalton", "Damian",
"Daniel", "Danielle", "Danny", "Daphne", "Darin", "Darlene", "Darrell", "Darren", "Darryl", "Dave",
"David", "Dawn", "Dean", "Deanna", "Debbie", "Deborah", "Debra", "Delilah", "Denise", "Dennis",
"Derek", "Derrick", "Desiree", "Destiny", "Diana", "Diane", "Diego", "Dominic", "Don", "Donald",
"Donna", "Doris", "Dorothy", "Doug", "Douglas", "Drew", "Duane", "Dustin", "Dwayne", "Dwight",
"Dylan", "Earl", "Ed", "Eddie", "Edgar", "Edith", "Edmund", "Edward", "Edwin", "Elaine",
"Eleanor", "Elena", "Eli", "Elijah", "Elizabeth", "Ella", "Ellen", "Elliot", "Elliott", "Ellis",
"Emily", "Emma", "Enrique", "Eric", "Erica", "Erick", "Erik", "Erin", "Ernest", "Esther",
"Ethan", "Eugene", "Eva", "Evan", "Evelyn", "Faith", "Felicia", "Felix", "Fernando", "Fiona",
"Florence", "Frances", "Francis", "Francisco", "Frank", "Franklin", "Fred", "Freddie", "Frederick", "Gabriel",
"Gail", "Garrett", "Gary", "Gavin", "Gene", "Geoffrey", "George", "Gerald", "Gertrude", "Gina",
"Gladys", "Glen", "Glenda", "Glenn", "Gloria", "Gordon", "Grace", "Grant", "Greg", "Gregory",
"Guy", "Gwen", "Hailey", "Hannah", "Harold", "Harry", "Hayden", "Hazel", "Heather", "Heidi",
"Helen", "Henry", "Herbert", "Holly", "Howard", "Hunter", "Ian", "Irene", "Isaac", "Isabel",
"Isabella", "Isaiah", "Isla", "Ivan", "Jack", "Jackie", "Jackson", "Jacob", "Jacqueline", "Jade",
"Jake", "James", "Jamie", "Jan", "Jane", "Janet", "Janice", "Jared", "Jasmine", "Jason",
"Javier", "Jay", "Jean", "Jeanette", "Jeanne", "Jeff", "Jeffery", "Jeffrey", "Jenna", "Jennifer",
"Jenny", "Jeremy", "Jerome", "Jerry", "Jesse", "Jessica", "Jessie", "Jill", "Jim", "Jimmy",
"Joan", "Joann", "Joanna", "Joanne", "Jocelyn", "Joe", "Joel", "John", "Johnathan", "Johnny",
"Jon", "Jonathan", "Jordan", "Jorge", "Jose", "Joseph", "Josephine", "Josh", "Joshua", "Joy",
"Joyce", "Juan", "Judith", "Judy", "Julia", "Julian", "Julie", "June", "Justin", "Kaitlyn",
"Kara", "Karen", "Katherine", "Kathleen", "Kathryn", "Kathy", "Katie", "Kay", "Kayla", "Keith",
"Kelly", "Kelsey", "Ken", "Kenneth", "Kerry", "Kevin", "Kim", "Kimberly", "Kirk", "Kristen",
"Kristin", "Kyle", "Lance", "Larry", "Laura", "Lauren", "Laurie", "Lawrence", "Leah", "Lee",
"Leo", "Leon", "Leonard", "Leroy", "Leslie", "Levi", "Lewis", "Liam", "Lillian", "Lily",
"Linda", "Lindsay", "Lisa", "Logan", "Lois", "Lori", "Louis", "Lucas", "Luis", "Luke",
"Lydia", "Lynn", "Mackenzie", "Madeline", "Madison", "Mae", "Maggie", "Malcolm", "Manuel", "Marc",
"Marcia", "Marcus", "Margaret", "Maria", "Mariah", "Marian", "Marie", "Marilyn", "Mario", "Marion",
"Mark", "Marlene", "Marsha", "Marshall", "Martha", "Martin", "Marvin", "Mary", "Mason", "Matt",
"Matthew", "Maureen", "Maurice", "Max", "Maxine", "Maya", "Megan", "Melanie", "Melinda", "Melissa",
"Melvin", "Mercedes", "Meredith", "Michael", "Micheal", "Michelle", "Miguel", "Mildred", "Milton", "Miriam",
"Molly", "Monica", "Morgan", "Nancy", "Naomi", "Natalie", "Nathan", "Nathaniel", "Neil", "Nicholas",
"Nicole", "Noah", "Norma", "Norman", "Olivia", "Omar", "Oscar", "Owen", "Pam", "Pamela",
"Pat", "Patricia", "Patrick", "Paul", "Paula", "Pauline", "Peggy", "Penny", "Peter", "Philip",
"Phillip", "Phyllis", "Preston", "Rachel", "Ralph", "Randall", "Randy", "Ray", "Raymond", "Rebecca",
"Regina", "Renee", "Rhonda", "Richard", "Rick", "Ricky", "Rita", "Rob", "Robbie", "Robert",
"Roberta", "Robin", "Rochelle", "Rodney", "Roger", "Roland", "Ron", "Ronald", "Rosa", "Rose",
"Rosemary", "Ross", "Roy", "Ruby", "Russell", "Ruth", "Ryan", "Sabrina", "Sally", "Sam",
"Samantha", "Samuel", "Sandra", "Sara", "Sarah", "Scott", "Sean", "Seth", "Shane", "Shannon",
"Sharon", "Shaun", "Shawn", "Sheila", "Shelby", "Sheldon", "Sherri", "Sherry", "Shirley", "Sidney",
"Simon", "Sofia", "Sophia", "Sophie", "Spencer", "Stan", "Stanley", "Stephanie", "Stephen", "Steve",
"Steven", "Stewart", "Sue", "Summer", "Susan", "Suzanne", "Sydney", "Sylvia", "Tamara", "Tammy",
"Tanya", "Tara", "Taylor", "Ted", "Teresa", "Terrance", "Terrence", "Terry", "Theodore", "Theresa",
"Thomas", "Tiffany", "Tim", "Timothy", "Tina", "Todd", "Tom", "Tommy", "Toni", "Tony",
"Tracy", "Travis", "Trent", "Trevor", "Tricia", "Troy", "Tyler", "Valerie", "Vanessa", "Vera",
"Vernon", "Veronica", "Vicki", "Vickie", "Victor", "Victoria", "Vincent", "Violet", "Virginia", "Vivian",
"Wade", "Walter", "Wanda", "Warren", "Wayne", "Wendy", "Wesley", "Whitney", "Will", "William",
"Willie", "Wyatt", "Xavier", "Yolanda", "Yvette", "Yvonne", "Zachary", "Zoe"



    ];

    let generatedNames = [];

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.classList.remove('hidden');
                imagePreviewWrapper.classList.add('visible');
                showNamesBtn.classList.remove('hidden');
                resultsSection.classList.add('hidden');
                // Add loading animation
                showNamesBtn.textContent = 'Processing Image...';
                setTimeout(() => {
                    showNamesBtn.textContent = 'Show Names';
                }, 1500);
            };
            reader.readAsDataURL(file);
        }
    });

    showNamesBtn.addEventListener('click', () => {
        if (!imageInput.files.length) {
            alert('Please upload an image first.');
            return;
        }

        // Show loading state
        showNamesBtn.disabled = true;
        showNamesBtn.textContent = 'Finding Names...';
        showNamesBtn.classList.add('processing');

        // Simulate processing delay
        setTimeout(() => {
            // Generate a random number of names between 500 and 10000
            const numberOfNames = Math.floor(Math.random() * 1501) + 500;
            grainCountSpan.textContent = numberOfNames.toLocaleString();

            generatedNames = getRandomSubset(fullNamesDataset, numberOfNames);

            displayNames(generatedNames);

            resultsSection.classList.remove('hidden');
            resultsSection.classList.add('visible');

            // Reset button state
            showNamesBtn.disabled = false;
            showNamesBtn.textContent = 'Show Names';
            showNamesBtn.classList.remove('processing');

            // Scroll to the results section
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    });

    // Add event listener for Enter key in search input
    nameSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    searchBtn.addEventListener('click', () => {
        const searchTerm = nameSearchInput.value.trim().toLowerCase();
        if (searchTerm === '') {
            searchResultDiv.textContent = '';
            document.querySelectorAll('.name-item.highlight').forEach(item => {
                item.classList.remove('highlight');
            });
            return;
        }

        const found = generatedNames.some(name => name.toLowerCase() === searchTerm);

        document.querySelectorAll('.name-item').forEach(item => {
            item.classList.remove('highlight');
        });

        if (found) {
            searchResultDiv.innerHTML = `<span class="name-found">✨ Yes! "${capitalizeFirstLetter(searchTerm)}" is on a grain of rice! ✨</span>`;
            
            document.querySelectorAll('.name-item').forEach(item => {
                if (item.textContent.toLowerCase() === searchTerm) {
                    item.classList.add('highlight');
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        } else {
            searchResultDiv.innerHTML = `<span class="name-not-found">😢 Sorry, "${capitalizeFirstLetter(searchTerm)}" isn't on any grains. Try another name!</span>`;
        }
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function getRandomSubset(arr, size) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, size);
    }

    function displayNames(names) {
        namesDisplay.innerHTML = '';
        names.forEach(name => {
            const nameItem = document.createElement('div');
            nameItem.classList.add('name-item');
            nameItem.textContent = name;
            namesDisplay.appendChild(nameItem);
        });
    }
});