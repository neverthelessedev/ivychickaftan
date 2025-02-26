<script>
  import { newFeatures } from './features';

</script>

<section>
  <h4>Cloth Features</h4>
  <main>
    {#each newFeatures as feature}
    <div class='cloth'>
      <div class="cover">
        <p class='hot'>Hot Deal</p>
        <h3>{feature.title}</h3>
        <a href={feature.link}>Shop Now</a>
        <div class="img-container">
          {#each feature.otherImages as i}
         <div class='cloth1'>
           <img src={i} alt="cloth">
         </div>
          {/each}

        </div>
      </div>
  <img src={feature.otherImages[0]} alt="cloth">
    </div>
    {/each}
  </main>
</section>
<style scoped>

  main{
    display: flex;
    flex-wrap: wrap;
    padding: 3rem 1rem;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid var(--secondaryColor);
    border-top: 1px solid var(--primaryColor);
 
  }


  h4{
    text-align: center;
    font-size: 2rem;
    margin: 1rem 0;
    animation: title;
    animation-timeline: view();
    animation-range: entry 0 cover 70%;
  }

  @keyframes title{
    from{
transform: translateY(-4rem);
}to{
      transform: translateY(0);

    }
  }

  .cloth1{
    width: 2rem;
    border: 1px solid var(--secondaryColor);
    height: 2rem;
    border-radius: 50%;
    background: var(--secondaryColor);
    overflow: hidden;
  }
  img{
    width: 100%;
    object-fit: cover;
    height: 100%;
  }

  .img-container{
    display: flex;
    width: 40%;
    justify-content: space-around;
  }

  h3{
    font-size: 1.8rem;
    text-transform: uppercase;
    margin: 10px 0;
  }

  .hot{
    font-size: 1.5rem;
    font-weight: bold;

  }

  a{
    text-decoration: none;
    color: white;
    background: var(--secondaryColor);
    margin: 1rem 0;
    padding: 10px 40px;
    border-radius: 2rem;
    font-size: 1.3rem;
  }
  
  .cloth{
    width: 400px;
    border: 1px solid var(--secondaryColor);
    box-shadow: 0 0 5px var(--tertiaryColor);
    color: white;
    height: 15rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
       animation: show;
    margin: 10px;

    animation-timeline: view();
    animation-range: entry 0 cover 50%;
  }
  .cloth:nth-child(2){
    animation: show1;
  animation-timeline: view();
  animation-range: entry 0 cover 50%;
  
}
.cloth:last-child{
    animation: show2;
    animation-timeline: view();
    animation-range: entry 0 cover 50%;

  }
    @keyframes show{
    from{
transform: translateX(-20rem);
}to{
      transform: translateX(0);

    }
  }
    @keyframes show1{
    from{
transform: translateY(20rem);
}to{
      transform: translateY(0);

    }
  }
    @keyframes show2{
    from{
transform: translateX(20rem);
}to{
      transform: translateX(0);

    }
  }

  .cover{
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    justify-content: space-around;
    top: 0;
    background: #00000080;
    padding: 10px;
    left: 0;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>