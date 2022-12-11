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

<EndlessList data={data} let:item>
  <div class="card">
    <img class="thumbnail" src={item.thumbnail} alt={`Preview image ${item.title}`} />
    <div class="content">
      <h3>Item 1</h3>
      <p>Description...</p>
    </div>
  </div>
</EndlessList>
