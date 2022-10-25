class Checkbox {
  constructor(parent, child) {
    this.parent = parent  //全選択のチェックボックス
    this.child = child || []  //子チェックボックス
  }
  /* 全選択のチェックボックスをクリックした時のイベントを設定 */
  addEvtOnClickParent() {
    this.parent.addEventListener("click", (e) => this.switchChildren(e.currentTarget.checked));
  }
  /* 子チェックボックスをクリックした時のイベントを設定 */
  addEvtOnClickChild() {
    this.child.forEach((e) => {
      e.addEventListener("click", () => this.switchParent());
    });
  }
  /* 子チェックの状態を見て、全選択のチェックを切り替え */
  switchParent() {
    var areAllChildrenChecked = true;
    for (let e of this.child) {
      if (!e.checked) {
        areAllChildrenChecked = false
        break
      }
    }
    if (areAllChildrenChecked) this.parent.checked = true;
    else this.parent.checked = false;
  }
  /* 子チェックを全て切り替え */
  switchChildren(bool) {
    for (let e of this.child) {
      e.checked = bool;
    }
  }
  //新たに取得した子チェックボックスを設定
  set updateChild(newChild) {
    this.child = newChild
  }
}