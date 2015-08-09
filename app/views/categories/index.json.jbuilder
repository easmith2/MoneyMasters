json.array! @categories.each do |category|
  json.id category.id
  json.title category.title
end
