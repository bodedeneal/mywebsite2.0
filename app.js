document.addEventListener("DOMContentLoaded", function() {
    // Apply styles to the body
    document.body.style.backgroundColor = "tan"; // Neon black background
    document.body.style.color = "black"; // Neon green text
    document.body.style.fontFamily = "'Arial', sans-serif"; // Change this to your desired font
    document.body.style.fontWeight = "bold"; // Make the text bold
    document.body.style.textAlign = "center"; // Center the text
    document.body.style.fontSize = "16px";
    
    var h1 = document.createElement('h1');
    h1.textContent = "Welcome To My Website";
    document.body.appendChild(h1);
    
    // Create and append the second div with images
    var imageDiv = document.createElement('div');
    imageDiv.style.display = "flex";
    imageDiv.style.justifyContent = "center"; // Center the images and video
    imageDiv.style.margin = "10px 0"; // Add some margin between the divs

    var img1 = document.createElement('img');
    img1.src = 'IMG_1508.jpeg';
    img1.width = 320;
    img1.height = 400;
    img1.alt = 'Image 1508';
    imageDiv.appendChild(img1);

    document.body.appendChild(imageDiv);

    // Append the rest of the content
    var h2 = document.createElement('h2');
    h2.textContent = "Hey, I'm Bode DeNeal";
    document.body.appendChild(h2);

    var h2About = document.createElement('h2');
    h2About.textContent = "About me";
    document.body.appendChild(h2About);

    var pAbout = document.createElement('p');
    pAbout.textContent = "Welcome to the website that I keep most of my projects and stuff so I you want to see the files and stuff go ahead. i would also like some support if you can got to my youtube account and sub @BodeDeNeal.";
    document.body.appendChild(pAbout);

    var h2Working = document.createElement('h2');
    h2Working.textContent = "What I'm working on";
    document.body.appendChild(h2Working);

    var pWorking = document.createElement('p');
    pWorking.textContent = (`I'm obsessed with coding and trying to monetize it. I am open for hire, you can find me at denealbode@gmail.com. For smaller projects, I only charge $${Math.floor(Math.random() * 100)} and for larger scale projects it can cost $${Math.floor(Math.random() * 1000)}.`);
    document.body.appendChild(pWorking);
});
