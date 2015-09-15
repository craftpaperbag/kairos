require 'rails_helper'

describe 'トップページ' do
  before do
    visit root_path
  end

  it 'kairosと表示' do
    expect(page).to have_content 'kairos'
  end

end
