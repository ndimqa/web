def not_string(str):
  if len(str) >= 3 and 'not' in str[:3]:
    return str
  return 'not ' + str
      
