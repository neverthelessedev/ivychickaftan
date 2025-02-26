<script>
  import Cloth from '../../assets/girls/girl5.jpg'
</script>

<main>
  <div class='img'>
    <img
    src={Cloth}
    alt='cloth'
    />
  </div>
  <form action="">
    <h2>Create for Kaftans

</h2>
  <div class='container'>
      <label for="username">Username</label>
      <input type="username" />
  </div>
  <div class='container'>
      <label for="email">Email Address</label>
      <input type="email" />
  </div>
  <div class='container'>
      <label for="password">Password</label>
      <input type="password" />
  </div>
  <div class='container'>
      <label for="confirm-password">Confirm Password</label>
      <input type="password" />
  </div>
  <button>Create Account</button>
<div class='cover'>
    <p>Already have an account?</p>
    <a href="/">Login</a>
</div>
  </form>
</main>

<style scoped>
  h2{
    text-align: center;
    font-size: 2.2rem;
  }
  .cover{
    text-align: center;
    margin: 10px;
    font-size: 1.4rem;
  }
  main{
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 3rem;
    justify-content: space-around;
    align-items: center;
  }
  .container{
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  label{
    font-size: 1.5rem;
  }

  button{
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px;
    border-radius: 1rem;
    border: 0;
    background: var(--tertiaryColor);
    margin: 5px;
    color: white;
    
  }
  a{
    margin: 15px 0;
  }
  
  form{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: var(--secondaryColor);
    border-radius: 1rem;
    color: white;
    width: 35rem;

    input{
      padding: 17px;
      font-size: 1.5rem;
      border-radius: 1rem;
      color: black;
      border: 0;
      margin: 5px 0  ;
    }
    
  }
  
.img{
  width: 30rem;
  height: 35rem;
}
img{
  width: 100%;
  height: 100%;
}
</style>