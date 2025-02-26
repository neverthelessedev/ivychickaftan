<main>
  <h3>Kindly fill all the field and drop your message, Your message will be reply within 24hours</h3>
  <form action="">
<div class='container'>
  <div class='input'>
        <label for="first-name">First Name</label>
        <input type="text">
  </div>
  <div class='input'>
        <label for="last-name">Last Name</label>
        <input type="text">
  </div>
</div>
<div class='container'>
  <div class='input'>
        <label for="phone-number">Phone Number</label>
        <input type="text">
  </div>
  <div class='input'>
        <label for="email">Email Address</label>
        <input type="email">
  </div>
</div>
<div class='input'>
  <label for="message">Your Message</label>
  <textarea rows=20  cols=20 name="message" id="messsage"></textarea>
</div>
<div class="center">

  <button>Submit your Question</button>
</div>
  </form>
</main>

<style scoped>
  main{
    width: 100vw;
    height: 100vh;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
      font-size: 2.7rem;
      text-align: center;
    }
.center{
  display: grid;
  place-items: center;
}
    button{
      background: #000;
      color: white;
      font-size: 1.5rem;
      color: white;
      padding: 15px 60px;
      margin: 20px;
      border: 0;
      border-radius: 1rem;
    }
    
    form{
      width: 90%;
textarea{
  width: 82vw;
  height: 14rem;
  margin-top: 5px;
  border: 1px solid var(--secondaryColor);
  border-radius: 2rem;
}
    }
    .container{
      display: flex;
      width: 100%;
      /* padding: 1rem; */
      /* background: #000; */
    }
    .input{
      width: 70%;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      margin-right: 20px;
      font-size: 1.5rem;
    }

    input{
width: 100%;
padding: 20px ;
margin: 4px 0;
font-size: 1.6rem;
border-radius: 1rem;
border: 1px solid var(--secondaryColor);
    }
  }
</style>