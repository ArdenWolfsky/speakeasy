Jekyll::Hooks.register :posts, :post_write do
    #system("python3 _plugins/generate_tags.py")
  end