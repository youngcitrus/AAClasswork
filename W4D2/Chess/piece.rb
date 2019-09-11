
class Piece

  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos
  end

end

class Null_Piece < Piece
  def initialize(color,board, pos)
    
  end
end