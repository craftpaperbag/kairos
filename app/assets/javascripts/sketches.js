$(function () {
  $('.sketch .cell').on('click', procCellClicked);
});

function procCellClicked() {
  if ( hasClickedCell() ) {
    // すでにクリック済みがある場合
    // あたらしいPeriodを描画
    drawPeriod( getClickedCell(), $(this) );
  } else {
    // なければ作成
    setClickedCell(this); 
  }
}

// クリック済みがあればtrue
function hasClickedCell () {
  if ( getClickedCell() ) {
    return true;
  }
  return false;
}

function setClickedCell(cell) {
  $(cell).addClass('clicked');
}

// クリック済みを取得
function getClickedCell() {
  return $('.sketch .cell.clicked')[0];
}

function unclicked() {
  $('.sketch .cell').removeClass('clicked');
}

// 期間を描画。
// 第一引数のcellがある行を基準にする。
function drawPeriod (start, end) {
  var row = $('.sketch tbody tr').index($(start).parent());
  var col = $('.sketch tbody tr:eq('+row+') .cell').index($(start));
  var endRow = $('.sketch tbody tr').index($(end).parent());
  var endCol = $('.sketch tbody tr:eq('+endRow+') .cell').index($(end));

  for (var c = col; c <= endCol; c++ ) {
    $('.sketch tbody tr:eq('+row+') td:eq('+c+')').addClass('period');
  }

  unclicked();
}
