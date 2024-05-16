    const container = document.getElementById('container');
    const fetchBtn = document.getElementById('fetchbtn');

    fetchBtn.addEventListener('click', async () => {
        try {
            const res = await fetch('https://reqres.in/api/users/1');
            const Data = await res.json();
            createUser(Data.data); 
    
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    });

    function createUser(user) {
        const divContainer = document.createElement('div');
        
        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        divContainer.appendChild(avatar);

        const name = document.createElement('h3');
        name.textContent = `${user.first_name} ${user.last_name}`;
        divContainer.appendChild(name);

        const email = document.createElement('p');
        email.textContent = user.email;
        divContainer.appendChild(email);

        container.appendChild(divContainer);
    }

