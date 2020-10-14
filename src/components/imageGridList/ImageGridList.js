import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

const tileData = [
  { img: "https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1680x1050.jpg", title: "nature", author: "john smith" },
  { img: "https://tse1.mm.bing.net/th?id=OIP.buaYJZOOG30pySlUvkwwpwHaHa&pid=Api&P=0&w=300&h=300", title: "nature", author: "mary smith" },
  { img: "http://www.pixelstalk.net/wp-content/uploads/2016/03/Blue-Green-beautiful-nature-wallpaper.jpg", title: "nature", author: "john smith" },
  { img: "https://www.funnyhowflowersdothat.co.uk/sites/flowers/files/styles/portrait_medium/public/field/image/ryan_longnecker_-_yosemite_national_park_-_mooiwatbloemendoen_v2.jpg?itok=vRPVJZCV", title: "nature", author: "mary smith" }

];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 500,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
