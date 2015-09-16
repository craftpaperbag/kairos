class SketchesController < ApplicationController
  before_action :set_sketch, only: %i( show )

  def show
  end

  def create
    sketch = Sketch.new sketch_params
    already = Sketch.find_by_name sketch.name

    if already
      message 'shared/sketch_already_exists'
      redirect_to root_path, flash: { sketch: sketch }
    elsif sketch.save
      message 'shared/sketch_created'
      redirect_to sketch_path sketch
    end
  end

  private
  def sketch_params
    params.require(:sketch).permit(:name)
  end

  def set_sketch
    @sketch = Sketch.find params[:id]
  end
end
