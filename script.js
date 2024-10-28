/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f4f4f4;
}

header {
    text-align: center;
    padding: 2rem 1rem;
    background-color: #333;
    color: white;
}

.profile-pic img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
}

header h1 {
    font-size: 2.5rem;
    margin-top: 1rem;
}

header p {
    font-size: 1.2rem;
    color: #ddd;
}

section {
    margin: 2rem auto;
    max-width: 800px;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

section h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
}

.experience-item, .skills ul {
    margin: 1rem 0;
}

.skills ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}

.skills li {
    background: #333;
    color: white;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 5px;
}

footer {
    text-align: center;
    padding: 1rem;
    background-color: #333;
    color: white;
}
