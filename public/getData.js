fetch('http://localhost:3000/data')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(obj => {
            createElements(obj)
        });
    })
    .catch(err => console.error(err));

    function createElements(obj) {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('restaurantsList');

        const img = document.createElement('img');
        img.classList.add('imageFile');
        img.src = obj['imageFile'];
       

        const name = document.createElement('h2');
        name.classList.add('name');
        name.innerHTML = obj['name'];

        const description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML =obj['description'];

        const rating = document.createElement('p');
        rating.classList.add('rating');
        rating.innerHTML ='Rating: ' + obj['averageRating'] +'⭐';

        const location = document.createElement('p');
        location.classList.add('location');
        location.innerHTML ='Location: '+ obj['location'];

        const hr = document.createElement('hr');
        hr.classList.add('hr-restaurang');



        mainDiv.appendChild(img);
        mainDiv.appendChild(name);
        mainDiv.appendChild(location);
        mainDiv.appendChild(description);
        mainDiv.appendChild(rating);
        mainDiv.appendChild(hr);
        document.querySelector('#restaurants').appendChild(mainDiv);
       
      }
