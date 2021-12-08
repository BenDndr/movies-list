class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :image_url, :slug, :avg_score

  has_many :reviews
end
