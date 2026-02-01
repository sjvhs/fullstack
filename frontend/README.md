Here is what HTML should be produced by this app:

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Posts — Sample</title>
    <link rel="stylesheet" href="./App.css" />
  </head>
  <body>
    <div>
      <h1>Posts</h1>

      <form>
        <textarea placeholder="Write something..." rows="4"></textarea>
        <button type="button">Post</button>
      </form>

      <ul class="posts-list">
        <li>
          <div class="post-content">Hello world! This is the first post.</div>
          <div class="post-meta">2/1/2026, 10:00:00 AM</div>
        </li>

        <li>
          <div class="post-content">Here's a second post.
It has two lines.</div>
          <div class="post-meta">1/31/2026, 4:30:12 PM</div>
        </li>

        <li>
          <div class="post-content">Third post — testing long content to see wrapping behavior. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div class="post-meta">1/30/2026, 9:05:00 AM</div>
        </li>
      </ul>
    </div>
  </body>
</html>
