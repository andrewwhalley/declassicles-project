/*
	jQuery snapPuzzle v1.0.0
    Copyright (c) 2014 Hans Braxmeier / Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/jQuery-snapPuzzle
	License: http://www.opensource.org/licenses/mit-license.php
*/

(function($){
    $.fn.snapPuzzle = function(options){
        var o = $.extend({ pile: '', containment: 'document', rows: 5, columns: 5, onComplete: function(){} }, options);
        
        // public methods
        if (typeof options == 'string') {
            this.each(function(){
                var that = $(this),
                    o = that.data('options'),
                    pieceWidth = that.width() / o.columns,
                    pieceHeight = that.height() / o.rows,
                    pile = $(o.pile),
                    maxX = pile.width() - pieceWidth,
                    maxY = pile.height() - pieceHeight,
                    puzzle_offset = that.closest('span').offset(),
                    pile_offset = pile.offset();

                if (options == 'destroy') {
                    $('.'+o.puzzle_class).remove();
                    that.unwrap().removeData('options');
                    pile.removeClass('snappuzzle-pile');
                } else if (options == 'refresh') {
                    $('.snappuzzle-slot.'+o.puzzle_class).each(function(){
                        var x_y = $(this).data('pos').split('_'), x = x_y[0], y = x_y[1];
                        $(this).css({
                            width: pieceWidth,
                            height: pieceHeight,
                            left: y*pieceWidth+490,
                            top: x*pieceHeight+50,
                            border: '1px solid blue'
                        });
                    });
                    $('.snappuzzle-piece.'+o.puzzle_class).each(function(){
                        if ($(this).data('slot')) {
                            // placed on slot
                            var x_y = $(this).data('slot').split('_'), slot_x = x_y[0], slot_y = x_y[1],
                                x_y = $(this).data('pos').split('_'), pos_x = x_y[0], pos_y = x_y[1];;
                            $(this).css({
                                width: pieceWidth,
                                height: pieceHeight,
                                position: 'absolute',
                                border: '1px solid red',
                                left: Math.floor((Math.random()*(maxX+1))+50),
                                top: Math.floor((Math.random()*(maxY+1)))+150,
                                zIndex: Math.floor((Math.random()*10)+1),
                               // left: slot_y*pieceWidth+puzzle_offset.left-pile_offset.left,
                                //top: slot_x*pieceHeight+puzzle_offset.top-pile_offset.top,
                                backgroundPosition: (-pos_y*pieceWidth)+'px '+(-pos_x*pieceHeight)+'px',
                                backgroundSize: that.width()
                            });
                        } else {
                            // placed anywhere else
                            var x_y = $(this).data('pos').split('_'), x = x_y[0], y = x_y[1];
                            $(this).css({
                                width: pieceWidth,
                                height: pieceHeight,
                                position: 'absolute',
                                border: '1px solid red',
                                //left: Math.floor((Math.random()*(maxX+1))),
                                //top: Math.floor((Math.random()*(maxY+1))),
                                left: Math.floor((Math.random()*(maxX+1))+50),
                                top: Math.floor((Math.random()*(maxY+1)))+150,
                                zIndex: Math.floor((Math.random()*10)+1),
                                backgroundPosition: (-y*pieceWidth)+'px '+(-x*pieceHeight)+'px',
                                backgroundSize: that.width()
                            });
                        }
                    });
                }
            });
            return this;
        }

        function init(that){
            var puzzle_class = 'sp_'+new Date().getTime(),
                puzzle = that.wrap('<span class="snappuzzle-wrap"/>').closest('span'),
                src = that.attr('src'),
                pieceWidth = that.width() / o.columns,
                pieceHeight = that.height() / o.rows,
                pile = $(o.pile).addClass('snappuzzle-pile'),
                maxX = pile.width() - pieceWidth,
                maxY = pile.height() - pieceHeight;

            $('<div class="puzzle-wrapper"/>').css({
                height:'500px',
                left:'0px',
                right:'0px',
                margin:'auto',
                zIndex:'1000'
            }).appendTo(puzzle);
            
            o.puzzle_class = puzzle_class;
            that.data('options', o);

            for (var x=0; x<o.rows; x++) {
                for (var y=0; y<o.columns; y++) {
                    $('<div class="snappuzzle-piece '+puzzle_class+'"/>').data('pos', x+'_'+y).css({
                        width: pieceWidth,
                        height: pieceHeight,
                        position: 'absolute',
                        left: Math.floor((Math.random()*(maxX+1))+50),
                        top: Math.floor((Math.random()*(maxY+1)))+150,
                        zIndex: Math.floor((Math.random()*10)+100),
                        backgroundImage: 'url('+src+')',
                        backgroundPosition: (-y*pieceWidth)+'px '+(-x*pieceHeight)+'px',
                        backgroundSize: that.width()
                    }).draggable({
                        start: function(e, ui)
                        { 
                            $(this).removeData('slot');
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Below is changed code %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                            // Check if there is a user helping
                            if (1 == 1) {
                                //iterates through a list of pieces to choose random ones to move
                                for( var i = 0; i < piecelist.length; i++)
                                {
                                    //random chance for piece to move
                                    var rando = Math.random() * (20 - 1) + 1;
                                    if(rando > 19.9) //chance of pieces moving, less is more
                                    {
                                        var cssdir = 'left';
                                        var dir = Math.random() * 150;
                                        var topdir = Math.random() * 150;

                                        //chooses random direction
                                        var posrando = Math.random();
                                        if(posrando < 0.25)
                                        {
                                            cssdir = 'top';
                                        }
                                        else if(posrando > 0.25 && posrando < 0.5)
                                        {
                                            cssdir = 'top';
                                        }
                                        else if(posrando > 0.5 && posrando < 0.75)
                                        {
                                            cssdir = 'left';
                                        }
                                        else if(posrando > 0.75)
                                        {
                                            cssdir = 'left';
                                        }

                                        //clustering script, makes pieces generally cluster around 400 left, 300 top
                                        //(don't play too much with the minimums of 100, 50)
                                        if(parseInt($(piecelist[i]).css('left')) > 400)
                                        {
                                            dir = Math.abs(dir)*-1;
                                        }
                                        else if(parseInt($(piecelist[i]).css('left')) < 100)
                                        {
                                            dir = Math.abs(dir)+160;
                                        }
                                        if(parseInt($(piecelist[i]).css('top')) > 300)
                                        {
                                            topdir = Math.abs(topdir)*-1;
                                        }
                                        else if(parseInt($(piecelist[i]).css('top')) < 50)
                                        {
                                            topdir = Math.abs(topdir) + 160;
                                        }

                                        //animate pieces
                                        if(cssdir == 'left')
                                        {
                                            $(piecelist[i]).animate(
                                            {
                                                left: (parseInt($(piecelist[i]).css('left')) + dir) + 'px',
                                            }, 1000);
                                        }
                                        else if(cssdir == 'top')
                                        {
                                            $(piecelist[i]).animate(
                                            {
                                                top: (parseInt($(piecelist[i]).css('top')) + topdir) + 'px',
                                            }, 1000);
                                        }
                                    }
                                }
                            }
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                        },
                        stack: '.snappuzzle-piece',
                        containment: o.containment
                    }).appendTo(pile).data('lastSlot', pile);

                    $('<div class="snappuzzle-slot '+puzzle_class+'"/>').data('pos', x+'_'+y).css({
                        width: pieceWidth,
                        height: pieceHeight,
                        left: y*pieceWidth+775,
                        top: x*pieceHeight+60,
                        position: 'absolute',
                        margin: 'auto',
                        border: '1px solid red',
                        zIndex: 10,
                    }).appendTo('.puzzle-wrapper').droppable({
                        accept: '.'+puzzle_class,
                        hoverClass: 'snappuzzle-slot-hover',
                        drop: function(e, ui){
                            var slot_pos = $(this).data('pos');

                            // prevent dropping multiple pieces on one slot
                            $('.snappuzzle-piece.'+puzzle_class).each(function(){
                                if ($(this).data('slot') == slot_pos) slot_pos = false;
                            });
                            if (!slot_pos) return false;

                            ui.draggable.data('lastSlot', $(this)).data('slot', slot_pos);
                            ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
                            if (ui.draggable.data('pos')==slot_pos) {
                                ui.draggable.addClass('correct');
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Below is changed code %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                for( var i = 0; i < piecelist.length; i++)
                                {
                                    if($(piecelist[i]).hasClass('correct'))
                                    {
                                        piecelist.splice(i, 1);
                                    }
                                }
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                // fix piece
                                // $(this).droppable('disable').fadeIn().fadeOut();
                                $(this).droppable('disable').css('opacity', 1).fadeOut(1000);
                                ui.draggable.css({cursor: 'default'}).draggable('disable');
                                if ($('.snappuzzle-piece.correct.'+puzzle_class).length == o.rows*o.columns) o.onComplete(that);
                            }
                        }
                    });
                }
            }
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Below is changed code %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            piecelist = $('.snappuzzle-piece');
            //console.log(piecelist);
            $('#pile').css('height', '40px');
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        }

        return this.each(function(){
            if (this.complete) init($(this));
            else $(this).load(function(){ init($(this)); });
        });
    };
}(jQuery));
