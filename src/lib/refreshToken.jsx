  export function Refresh(){
      const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        };
  //  fetch('http://localhost:3000/auth/refresh', options)
  //    .then(response => localStorage.setItem('token', (response.data.token)))
  //    .catch(err => console.error(err));
}