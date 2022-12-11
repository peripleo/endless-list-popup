<script>
  import EndlessList from './EndlessList/EndlessList.svelte';

  const data = [{
    thumbnail: 'thumbnail.jpg', title: 'Card 1', description: 'Description...' 
  },{
    thumbnail: 'thumbnail.jpg', title: 'Card 2', description: 'Description...' 
  },{
    thumbnail: 'thumbnail.jpg', title: 'Card 3', description: 'Description...' 
  },{
    thumbnail: 'thumbnail.jpg', title: 'Card 4', description: 'Description...' 
  },{
    thumbnail: 'thumbnail.jpg', title: 'Card 5', description: 'Description...' 
  },{
    thumbnail: 'thumbnail.jpg', title: 'Card 6', description: 'Description...' 
  },{
    thumbnail: 'thumbnail.jpg', title: 'Card 7', description: 'Description...' 
  },{
    thumbnail: 'thumbnail.jpg', title: 'Card 8', description: 'Description...' 
  },{
    thumbnail: 'thumbnail.jpg', title: 'Card 9', description: 'Description...' 
  },{
    thumbnail: 'thumbnail.jpg', title: 'Card 10', description: 'Description...' 
  }];
</script>

<EndlessList 
  class="my-list" 
  data={data} 
  padding={[75, 20, 75, 20]}
  let:item>
  <div class="card">
    <img class="thumbnail" src={item.thumbnail} alt={`Preview image ${item.title}`} />
    <div class="content">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </div>
</EndlessList>
