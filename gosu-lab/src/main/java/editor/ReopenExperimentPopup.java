package editor;

import editor.util.EditorUtilities;
import java.nio.file.Path;
import editor.util.SmartMenuItem;

import gw.util.PathUtil;
import javax.swing.*;
import javax.swing.event.MenuEvent;
import javax.swing.event.MenuListener;
import java.awt.event.ActionEvent;
import java.util.ArrayList;
import java.util.List;

/**
 */
public class ReopenExperimentPopup implements MenuListener
{
  private JMenu _menu;

  private ReopenExperimentPopup( JMenu reopenExperiment )
  {
    _menu = reopenExperiment;
    reopenExperiment.addMenuListener( this );
  }

  public static void initialize( JMenu reopenExperiment )
  {
    new ReopenExperimentPopup( reopenExperiment );
  }

  private void addNewItem( String name, String icon, Runnable action )
  {
    JMenuItem item = new SmartMenuItem(
      new AbstractAction( name, EditorUtilities.loadIcon( icon ) )
      {
        public void actionPerformed( ActionEvent e )
        {
          action.run();
        }
      } );
    _menu.add( item );
  }

  @Override
  public void menuSelected( MenuEvent e )
  {
    _menu.removeAll();

    addExperimentMenuItems();
    addClearList();
  }

  private void addClearList()
  {
    List<String> experiments = LabFrame.instance().getExperiments();
    if( experiments.size() > 1 )
    {
      _menu.addSeparator();
      addNewItem( "Clear List", "images/close.png", () -> {
        List<String> newList = new ArrayList<>();
        newList.add( experiments.get( 0 ) );
        LabFrame.instance().setExperiments( newList );
      } );
    }
    else
    {
      JMenuItem empty = new SmartMenuItem(
        new AbstractAction( "<empty>", EditorUtilities.loadIcon( "images/empty16x16.gif" ) )
        {
          public void actionPerformed( ActionEvent e )
          {
          }
        } );
      empty.setEnabled( false );
      _menu.add( empty );
    }
  }

  private void addExperimentMenuItems()
  {
    java.util.List<String> experiments = LabFrame.instance().getExperiments();
    for( int i = 1; i < experiments.size(); i++ )
    {
      String exp = experiments.get( i );
      Path dir = PathUtil.create( exp );
      if( PathUtil.exists( dir ) )
      {
        String label = PathUtil.getName( dir ) + " - [" + exp + "]";
        addNewItem( label, "images/g_16.png", () -> LabFrame.instance().getGosuPanel().openExperiment( PathUtil.create( exp ) ) );
      }
    }
  }

  @Override
  public void menuDeselected( MenuEvent e )
  {

  }

  @Override
  public void menuCanceled( MenuEvent e )
  {

  }
}
