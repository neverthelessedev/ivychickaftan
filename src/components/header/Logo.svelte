<script>
  import Logo from '../../assets/kaftan.jpg'
</script>

<main>
<a href="/ivychickaftan">
    <div class="logo">
      <img src={Logo} alt="logo">
    </div>
</a>
</main>

<style scoped>
  main{
    margin-right: 3rem;
  }
  
  .logo{  width: 8rem;
  border-right: 1px solid var(--primaryColor);
  
  }

  img{
    width: 100%;
  }
 @media(max-width: 1442px){
    .logo{
      width: 3rem;
    }
    main{

      margin-right: 10px;
    }
  }
 @media(max-width: 671px){
  
    main{
      display: none;
      margin-right: 10px;
    }
  }

  
</style>