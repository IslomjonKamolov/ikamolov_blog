{posts.length > 0 ? (
        posts.map(post => (
          <div className='postContainer' key={post.id}>
            <h2 className='postTitle'>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>

            <small className='createdData'>Yaratilgan: {new Date(post.createdAt.seconds * 1000).toLocaleString()}</small>

            <button className='postDeleteButton' onClick={() => deletePost(post.id)}>O'chirish</button> {/* O'chirish tugmasi */}
          </div>
        ))
      ) : (
        <p>Postlar mavjud emas :(</p>
      )}

      // Code html render