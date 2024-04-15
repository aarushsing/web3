# Palkeoramix decompiler. 

def storage:
  message is array of struct at storage 0

def getMessage(): # not payable
  return message[0 len message.length].field_0

def message(): # not payable
  return message[0 len message.length].field_0

#
#  Regular functions
#

def setMessage(string _message): # not payable
  message[].field_0 = Array(len=_message.length, data=_message[all])

def _fallback() payable: # default function
  if uint32(call.func_hash) == setMessage(string message):
      require not call.value
      message[].field_0 = Array(len=_param1.length, data=_param1[all])
      stop
  if getMessage() == uint32(call.func_hash):
      require not call.value
      mem[160] = uint256(message.field_0)
      idx = 160
      s = 0
      while message.length + 128 > idx:
          mem[idx + 32] = message[s].field_256
          idx = idx + 32
          s = s + 1
          continue 
      return Array(len=message.length, data=mem[160 len message.length])
  require message() == uint32(call.func_hash)
  require not call.value
  mem[128] = uint256(message.field_0)
  idx = 128
  s = 0
  while message.length + 96 > idx:
      mem[idx + 32] = message[s].field_256
      idx = idx + 32
      s = s + 1
      continue 
  return Array(len=message.length, data=mem[128 len message.length])

