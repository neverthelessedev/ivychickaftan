<main>
  <section>
    <h3>Join our Newsletter </h3>
    <p>Get information in your email for all the news, about our latest and get an excellent early access shopping</p>
    <form action="">
      <input type="email" placeholder="Enter your email address">
      <button>Join</button>
    </form>
  </section>
  <section>

    <h3>About Us </h3>
    <p>Kaftans is more than just a name. Our brand is tailor to make women feel beautify, confident and empowered. We specialize in quality, High Fashion, Luxury Bubu dresses and Kaftans</p>

      <button class='more'>Learn More</button>
  </section>
</main>

<style scoped>

  main{
    padding: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
  }
  .more{
    margin: 1rem 0;
  }
  
  section{
    width: 50%;
    margin: 1rem;
    border: 1px solid var(--primaryColor);
    border-radius: 2rem;
    padding: 3rem;
    text-align: center;
    animation: join;
    animation-timeline: view();
    animation-range: entry 0 cover 50%;
  }
  section:last-child{
    animation: join1;
    animation-timeline: view();
    animation-range: entry 0 cover 50%;

  }
  @keyframes join{
    from{
      transform: translateX(-10rem);
    }to{
      transform: translateX(0);
    }
  }
  @keyframes join1{
    from{
      transform: translateX(10rem);
    }to{
      transform: translateX(0);
    }
  }
  
  h3{
    font-size: 3rem;
    margin: 1rem;
  }

  form{
    margin: 2rem;
    input{
      padding: 1.3rem;
      border-radius: 2rem;
      
      border: 1px solid gray;
    }
    input:focus{
      outline: 0;
    }
    
  }
  button{
    background: #000;
    color: white;
    font-size: 1.3rem;
    border-radius: 2rem;
    padding: 1.4rem 3rem;
  }
  
p{
  font-size: 1.4rem;
}

@media(max-width:1560px){
  input{
      font-size: 1.4rem;

  }
}
@media(max-width:1560px){
  main{
    padding: 1rem;
  }
  form{
    margin: 1rem 0;
  }
  h3{
    font-size: 2rem;
  }
  input{
    font-size: 1rem;
  }
}
@media(max-width: 1133px){
  main{
    flex-direction: column;
  }
  section{
    width: 80%;
  }
}

</style>