
      const users = [];
      
      const contiesWithLowerBmi = ["Chad", "Sierra Leone", "Mali", "Gambia", "Uganda", "Ghana", "Senegal", "Somalia", "Ivory Coast", "Isreal"];
      
      const featToMeter = 0.3048;
      
      const bmiCountryRatio = 0.82;
      
      const computeBMI = ({weight, height, country}) => {
        const heightInMeters = height * featToMeter;
        let BMI = weight / (heightInMeters^2);
        
        if (countriesWithLowerBmi.includes(country))
          BMI*= bmiCoundtryRatio;
        
        return Math.round(BMI, 2);
      };
      
      const getSelectedUser = (userId) => {
        return users.find(({id}) => id === userId);
      };
      
      
      const displaySelectedUser = ({target}) => {
        let user = getSelectedUser(target.value);
        let properties = Object.keys(user);
        
        propeties.forEac(prop => {
          const span = document.querySelector(`span[data-${prop}-value]`);
          if(span) {
            span.textContent = user[prop];
          }
        })
      }
      
      const letsCalculateBMI = ({target}) => {
        const value = document.querySelector('.select-text').value;
        const user = getSelectedUser(target.value);
        
        const bmi = computeBMI(user);
        document.querySelector('.bmi-text').innerHTML = bmi
      };
      
      const powerupTheUI = () => {
        const button = document.querySelector('#oracle');
        
        const select = document.querySelector('.select-text');
        select.addEventListener('change', displaySelectedUser);
        
        button.addEventListener('click', letsCalculateBMI);
      };
      
      const displayUsers = (users) => {
        users.forEach(user => {
          const sel = document.querySelector('.select-text');
          const opt = document.createElement('option');
          
          opt.text = user.name;
          opt.value = user.id;
        });
      };
      
      const fetchAndDisplayUsers = () => {
        users.push({
          age: 40,
          weight: 75,
          height: 6,
          country: 'Nigeria',
          name: 'Charles Odili',
          id: 'dfhb454768DghtF'
        });

        displayUsers(users);
        
        const api = 'https://randomapi.com/api/y1lfp11q?key=LEIXGF3O-AG71-6J84';
        
        fetch(api).then((response) => {
          return response.json();
        }).then(({results}) => {
          let [user] = results;
          users.push(user);
          displayUsers([user]);
        }).catch((err) => {
          console.log(err)
        });
      };
      
      const startApp = () => {
        powerupTheUI();
        fetchAndDisplayUsers();
      };

      startApp();