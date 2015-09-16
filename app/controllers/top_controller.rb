class TopController < ApplicationController
  def index
    @sketch = Sketch.new(flash[:sketch])
  end
end
