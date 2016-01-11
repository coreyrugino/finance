json.deposits @deposits do |deposit|
  json.id deposit.id
  json.title deposit.title
  json.amount deposit.amount
end
