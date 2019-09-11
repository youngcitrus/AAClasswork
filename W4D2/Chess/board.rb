require './piece.rb'

class Board

  def initialize
    @grid = Array.new(8) {Array.new(8)}
    i = 0
    while i < 2
      j = 0
      while j < 8
        @grid[i][j] = Piece.new("black", self, [i, j])
        j += 1
      end
      i += 1
    end

    i = 2
    while i < 6
      j = 0
      while j < 8
        @grid[i][j] = nil 
         j += 1
      end
      i += 1
    end

    i = 6
    while i < 8
      j = 0
      while j < 8
        @grid[i][j] = Piece.new("white", self, [i, j])
         j += 1
      end
      i += 1
    end

  end

  def move_piece(start_pos, end_pos)
    
    if self[start_pos] == nil
      raise "No piece at this position"
    end
    # if invalid_move == true # need to flesh out
    #   raise "Can not move to that position"
    # end
    piece = self[start_pos]
    self[start_pos] = self[end_pos]
    self[end_pos] = piece

  end
  
  def []=(pos, piece)
    x,y = pos
    @grid[x][y] = piece 
  end

  def [](x, y)
    # x,y = pos
    @grid[x][y]
  end

end