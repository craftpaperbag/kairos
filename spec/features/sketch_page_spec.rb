require 'rails_helper'

describe 'スケッチページ' do
  before do
    @sketch = create(:sketch)
    visit sketch_path @sketch
  end

  it 'スケッチ名を表示' do
    expect(page).to have_content @sketch.name
  end
end
