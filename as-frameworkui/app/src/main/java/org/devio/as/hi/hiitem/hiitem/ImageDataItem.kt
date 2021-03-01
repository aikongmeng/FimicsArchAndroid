package org.devio.`as`.hi.hiitem.hiitem

import android.widget.ImageView
import androidx.recyclerview.widget.RecyclerView
import org.devio.`as`.hi.hiitem.R

class ImageDataItem(spanCount: Int, data: ItemData??) :
    HiDataItem<ItemData, RecyclerView.ViewHolder>(data!!) {
    override fun onBindData(holder: RecyclerView.ViewHolder, position: Int) {
        var imageview = holder!!.itemView.findViewById<ImageView>(R.id.item_image)
        imageview.setImageResource(R.drawable.item_image);
    }

    var spanCount: Int

    init {
        this.spanCount = spanCount
    }

    override fun getItemLayoutRes(): Int {
        return R.layout.layout_list_item_image;
    }

    override fun getSpanSize(): Int {
        return spanCount;
    }
}